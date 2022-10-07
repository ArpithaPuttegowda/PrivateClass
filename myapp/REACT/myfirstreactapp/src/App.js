import {ConditionalRendering} from "./components/ConditionalRendering";
import {ContextApi} from "./components/ContextApi";
import ExceptionHandling from "./components/ExceptionHandling/ExceptionHandling";
import Hero from "./components/ExceptionHandling/Hero";
import Test from "./components/ExceptionHandling/Test";
import HOCExample from "./components/HOC/HOCExample";
import HoverComp from "./components/HOC/HoverComp";
import LifeCycleMethodComponentWillUnMount from "./components/LifeCycleMethodComponentWillUnMount";
import LifeCycleMethodsUpdation from "./components/LifeCycleMethodUpdating";
import SetStateAsObject from "./components/SetStateArguments/SetStateAsObject";
import SetStateAsObjectAndCallback from "./components/SetStateArguments/SetStateAsObjectAndCallback";
import SetStateWithCallback from "./components/SetStateArguments/SetStateWithCallback";
import LifeCycleMethods from "./components/LifeCycleMethods";
import {TakeTheFormDataUseRef} from "./components/TakeDataByUseRef";
import TakeTheFormData from "./components/TakeTheFormData";
import {ParentBtnHover} from "./components/HOC/CustomHooks/ParentBtnHover";
import AjaxComponentDidMount from "./components/AjaxComponentDidMount";
import {ComponentDidMountUseEffect} from "./components/ComponentDidMountUseEffect";
import {ComponentWillUnMountUseEffect} from "./components/ComponentWillUnMountUseEffect";
import {AjaxUseEffect} from "./components/AjaxUseEffect";
import ShouldComponentUpdate from "./components/ShouldComponentUpdate";
import ExamplePureComponent from "./components/ExamplePureComponent";
import ExamplePureComponentPtoC from "./components/ExamplePureComponentPtoC";
import {FunctionalComponentReactMemo} from "./components/FunctionalComponentReactMemo";
import {GetRef} from "./components/GetRef";
import {PreparePlayerList} from "./components/ListKeys/PreparePlayerList";
import PrepareCountryList from "./components/ListKeys/PrepareCountryList";
import {PrepareOrderedList} from "./components/ListKeys/PrepareOrderedList";
import {ListKeysComponent} from "./components/ListKeys/ListKeysComponent";
import {DataFromApi} from "./components/ListKeys/DataFromApi";
import {ListAndKeysTable} from "./components/ListKeys/ListAndKeysTable";
import {VirtualDOM} from "./components/VirtualDOM";
import {OrderedListColors} from "./components/ReusuableComponents/OrderedListColors";
import {OrderedListFlowers} from "./components/ReusuableComponents/OrderedListFlowers";
import {OrderedListComp} from "./components/ReusuableComponents/OrderedListComp";
import OrderedListClassComp from "./components/ReusuableComponents/OrderedListClassComp";

const App = () => {
  return (
    <div>
      {/* <ContextApi />
      <ConditionalRendering />
      <TakeTheFormData />
      <TakeTheFormDataUseRef /> */}
      {/* <LifeCycleMethods name="Delhi" runs={10} /> */}
      {/* <ParentBtnHover /> */}
      {/* <LifeCycleMethodsUpdation /> */}
      {/* <LifeCycleMethodComponentWillUnMount /> */}
      {/* <ExceptionHandling /> */}
      {/* <Test /> */}
      {/* <SetStateAsObject /> */}
      {/* <SetStateAsObjectAndCallback /> */}
      {/* <SetStateWithCallback /> */}
      {/* <HOCExample /> */}
      {/* <AjaxComponentDidMount /> */}
      {/* <ComponentDidMountUseEffect /> */}
      {/* <ComponentWillUnMountUseEffect /> */}
      {/* <AjaxUseEffect /> */}
      {/* <LifeCycleMethods color="red" /> */}
      {/* <ShouldComponentUpdate color="green" /> */}
      {/* <ExamplePureComponent /> */}
      {/* <ExamplePureComponentPtoC /> */}
      {/* <FunctionalComponentReactMemo /> */}
      {/* <GetRef /> */}
      {/* <PreparePlayerList /> */}
      {/* <PrepareCountryList /> */}
      {/* <PrepareOrderedList /> */}
      {/* <ListKeysComponent /> */}
      {/* <DataFromApi /> */}
      {/* <ListAndKeysTable /> */}
      {/* <VirtualDOM /> */}
      {/* <OrderedListColors />
      <OrderedListFlowers />
      <OrderedListComp data={["red", "blue", "green", "yellow"]} />
      <OrderedListComp data={["lilly", "jasmin", "Sun flowers"]} /> */}
      <OrderedListClassComp data={["red", "blue", "green", "yellow"]} />
    </div>
  );
};
export default App;
