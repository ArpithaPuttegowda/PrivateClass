import { useState } from "react";
import "./App.css";
import { Parent3 } from "./Components/ChildToParent/PassingDataFromChildToParent";
import { PassingDataFromChildToParent2 } from "./Components/ChildToParent/PassingDataFromChildToParent2";
import { ConditionalRendering1 } from "./Components/ConditionalRendering/ConditionalRendering1";
import { ConditionalRendering2 } from "./Components/ConditionalRendering/ConditionalRendering2";
import { ContextAPI2 } from "./Components/ContextAPI/ContextAPI2";
import { ContextAPI3 } from "./Components/ContextAPI/ContextAPI3";
import { ContextComp } from "./Components/ContextAPI/ContextAPITechnique";
import { MainComp } from "./Components/ContextAPI/PropDrilling";
import { RegistrationControlled } from "./Components/ControlledVsUncontrolled/RegistrationControlled";
import { RegistrationPageUnControlled } from "./Components/ControlledVsUncontrolled/RegistrationPageUnControlled";
import { NameUpate } from "./Components/ExamplesReactMemo/NameUpate";
import ExceptionHandlingParent from "./Components/ExceptionHandling/ExceptionHandlingParent";
import { Hero } from "./Components/ExceptionHandling/Hero";
import Parent2 from "./Components/ExceptionHandling/Parent2";
import LifeCycleMounting from "./Components/LifeCycleMethods/LifeCycleMounting";
import LifeCycleUpdating from "./Components/LifeCycleMethods/LifeCycleUpdating";
import { LifeCycleFunctionalMounting } from "./Components/LifeCycleMethods/UseEffectHook/LifeCycleFunctionalMounting";
import LifeCycleFunctionalUnMounting from "./Components/LifeCycleMethods/UseEffectHook/LifeCycleFunctionalUnMounting";
import { LifeCycleFunctionalUpdating } from "./Components/LifeCycleMethods/UseEffectHook/LifeCycleFunctionalUpdating";
import { DropdownListKeys } from "./Components/ListsKeys/DropdownListKeys";
import { HeaderList } from "./Components/ListsKeys/HeaderList";
import { OrderedListKeys } from "./Components/ListsKeys/OrderedListKeys";
import { PlayerLists } from "./Components/ListsKeys/PlayerLists";
import { TableComp } from "./Components/ListsKeys/TableComp";
// import { ListsComp } from "./Components/ListsKeys/UnorderedList";
import { MutableState } from "./Components/MutableStateAndImmutableProps/MutableState";
import ExamplePureComponent from "./Components/PureComponentAndReactMemo/ExamplePureComponent";
import { CountryDown } from "./Components/ReusuableComponents/DropDown/CountryDown";
import { DropDownReusuable } from "./Components/ReusuableComponents/DropDown/DropDownReusuable";
import { GenericH1 } from "./Components/ReusuableComponents/GenericH1";
import { InputReusuable } from "./Components/ReusuableComponents/ListReusuable/InputGeneric/InputReusuable";
import { ListComp } from "./Components/ReusuableComponents/ListReusuable/ListComp";
import { TableReusuable } from "./Components/ReusuableComponents/TableReusable/TableReusuable";

function App() {
  const [color, setColor] = useState("red");
  return (
    <div>
      {/* <ConditionalRendering1 /> */}
      {/* <ConditionalRendering2 /> */}
      {/* <LifeCycleMounting /> */}
      {/* <button onClick={() => setColor("blue")}>Click me</button> */}
      {/* <LifeCycleUpdating n={name} />  */}
      {/* <MutableState /> */}
      {/* <LifeCycleFunctionalMounting /> */}
      {/* <LifeCycleFunctionalUpdating color={color} /> */}
      {/* <ExamplePureComponent /> */}
      {/* <NameUpate /> */}
      {/* <ExceptionHandlingParent/> */}
      {/* <Parent2/> */}
      {/* <LifeCycleFunctionalUnMounting/> */}
      {/* <ListsComp data={["red","blue","yellow"]}/> */}
      <ListComp data={["red","blue","yellow"]} title="Color"/>
      <ListComp data={["Jasmin","Lilly","Rose"]} title="Flower"/>
      <ListComp data={["Maruthi","Hondayi","Suzuki"]} title="Cars" />
      <InputReusuable lbl="Name" type="text"/>
      <InputReusuable lbl="Password" type="password"/>
      <InputReusuable lbl="Email" type="email"/>
      <InputReusuable lbl="Phone no" type="number"/>
      <CountryDown/>
      <CountryDown/>
      <CountryDown/>
      <DropDownReusuable title="Country" data={["India","Pak","UK"]}
      />
      <DropDownReusuable title="State" data={["Karnataka","Maharastra","AP"]}
      />
      <DropDownReusuable title="District" data={["Bangalore","Mysore"]}
      />
      <GenericH1  data={{
    name:"Sachin",
    loc:"Mumbai",
    runs:10,
    pinCode:123
  }}/>
  <TableReusuable headers={["Name","Loc"]} data={[{name:"Sachin",loc:"Mumbai"}]} keys={["name","loc"]}/>
  <TableReusuable headers={["PaymentType","Amount","Invoice Id"]} data={[{pT:"Check",amt:"10$",invId:"11"}]} keys={["pT","amt","invId"]}/>
    </div>
  );
}

export default App;