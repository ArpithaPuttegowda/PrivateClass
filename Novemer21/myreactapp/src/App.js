import {Box} from "./Components/CommunicationB/Box";
import {Parent} from "./Components/CommunicationB/ParentToChild";
import "./App.css";
import BoxC from "./Components/CommunicationB/BoxC";
import Count from "./Components/Count";
import {CountF} from "./Components/CountF";
import {Add} from "./Components/Add";
import {AddF} from "./Components/AddUseRef";
import P from "./Components/CommunicationB/ChildToParent";
import {ParentF} from "./Components/CommunicationB/ChildToParentF";
import {ExampleParent} from "./Components/CommunicationB/ChildToParent__ParentToChild";
import {WithoutContextAPI} from "./Components/ContextAPI/WithoutContextAPI";
import {WithContextApi} from "./Components/ContextAPI/WithContextApi";
import {OrderedList} from "./Components/ListAndKeys/OrderedList";
import {UnOrderedList} from "./Components/ListAndKeys/UnorderedList";
import {DropDown} from "./Components/ListAndKeys/DropDown";
import {Headers} from "./Components/ListAndKeys/Headers";
import {ColorsFlowerList} from "./Components/ListAndKeys/ColorsFlowerList";
import {SachinDataList} from "./Components/ListAndKeys/SachinDataList";
import {TableList} from "./Components/ListAndKeys/TableList";
import TableListC from "./Components/ListAndKeys/TableListC";
import {ColorList} from "./Components/ReusuableComponents/ColorList";
import {Flowers} from "./Components/ReusuableComponents/Flowers";
import {OrderListReusuable} from "./Components/ReusuableComponents/OrderListReusuable";
import {DropDownReusuable} from "./Components/ReusuableComponents/DropDown";
import {TableResuableComp} from "./Components/ReusuableComponents/TableResuableComp";
import {ConditionalRenderingAnd} from "./Components/ConditionalRenderingInReact/ConditionalRenderingAnd";
import {ConditionalRenderingTernary} from "./Components/ConditionalRenderingInReact/ConditionalRenderingTernary";
import LifeCycleMouting from "./Components/LifeCycleMethods/LifeCycleMouting";
import LifeCycleMethodUpdating from "./Components/LifeCycleMethods/LifeCycleMethodUpdating";
import LifeCycleUnMounting from "./Components/LifeCycleMethods/LifeCycleUnMounting";
import ErrorHandling from "./Components/ExceptionHandling/ErrorHandling";
import BH from "./Components/HOC/BH";
import {Moutingphase} from "./Components/useEffectHook/moutingphase";
import {UpdatingPhase} from "./Components/useEffectHook/UpdatingPhase";
import ReactPureComp from "./Components/PureComponentAndReactMemo/ReactPureComp";
import ReactPureComp2 from "./Components/PureComponentAndReactMemo/ReactPureComp2";
import ExampleMemo from "./Components/PureComponentAndReactMemo/MemoReactEx";
import {ExampleUseReducer} from "./Components/Hooks/ExampleUseReducer";
import {GlobalStateManagement} from "./Components/GlobalStateManagementHooksContext/GlobalStatement";
import {ExampleUseMemo} from "./Components/Hooks/ExampleUseMemo";

// const App = () => {
//   const loc = "hyderabad";
//   return (
//     <div>
//       <div>
//         <Box n="1" loc={loc} />
//         <Box n="2" />
//         <Box n="3" />
//       </div>
//       <div>
//         <Box />
//         <Box />
//         <Box />
//       </div>
//       <div>
//         <Box />
//         <Box />
//         <Box />
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const name = "sachin";
//   return (
//     <div>
//       <div>
//         <BoxC n="1" loc="mumbai" />
//         <BoxC n="2" />
//         <BoxC n="3" />
//       </div>
//       <div>
//         <BoxC />
//         <BoxC />
//         <BoxC name={name} />
//       </div>
//       <div>
//         <BoxC />
//         <BoxC />
//         <BoxC />
//       </div>
//     </div>
//   );
// };

const App = () => {
  console.log("arpitha,newly added");
  const flowers = ["jasmin", "lilly", "sunFlower"];
  return (
    <div>
      {/* <Count /> */}
      {/* <CountF /> */}
      {/* <Add /> */}
      {/* <AddF /> */}
      {/* <P /> */}
      {/* <ParentF /> */}
      {/* <ExampleParent /> */}
      {/* <WithoutContextAPI /> */}
      {/* <WithContextApi /> */}
      {/* <OrderedList /> */}
      {/* <UnOrderedList /> */}
      {/* <DropDown /> */}
      {/* <Headers /> */}
      {/* <ColorsFlowerList /> */}
      {/* <SachinDataList /> */}
      {/* <TableList /> */}
      {/* <TableListC /> */}
      {/* <ColorList />
      <Flowers data={["Rose", "lilly"]} />
      <OrderListReusuable data={["red", "blue", "yellow"]} />
      <OrderListReusuable data={flowers} />
      <OrderListReusuable />
      <DropDownReusuable data={["India", "Pak", "US"]} label="Contry" />
      <DropDownReusuable data={["red", "blue", "yellow"]} label="Colours" />
      <DropDownReusuable />
      <TableResuableComp
        headers={["name", "loc"]}
        data={[
          {name: "sachin", loc: "Mumbai"},
          {name: "dhoni", loc: "ranchi"}
        ]}
        tableKeys={["name", "loc"]}
      />
      <TableResuableComp
        headers={["Flower", "Color", "Priority"]}
        data={[
          {flower: "rose", clr: "red", pri: "1"},
          {flower: "lilly", clr: "yellow", pri: "2"}
        ]}
        tableKeys={["flower", "clr", "pri"]}
      />
      <ConditionalRenderingAnd />
      <ConditionalRenderingTernary /> */}
      {/* <LifeCycleMouting name="Delhi" /> */}
      {/* <LifeCycleMethodUpdating name="hyderabad" /> */}
      {/* <LifeCycleUnMounting /> */}
      {/* <ErrorHandling /> */}
      {/* <BH /> */}
      {/* <Moutingphase /> */}
      {/* <UpdatingPhase /> */}
      {/* <ReactPureComp /> */}
      {/* <ReactPureComp2 /> */}
      {/* <ExampleMemo /> */}
      {/* <ExampleUseReducer /> */}
      {/* <GlobalStateManagement /> */}
      <ExampleUseMemo />
    </div>
  );
};

export default App;
