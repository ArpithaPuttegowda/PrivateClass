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

const App = () => {
  return (
    <div>
      {/* <ContextApi />
      <ConditionalRendering />
      <TakeTheFormData />
      <TakeTheFormDataUseRef /> */}
      <LifeCycleMethods name="Delhi" runs={10} />
      {/* <LifeCycleMethodsUpdation /> */}
      {/* <LifeCycleMethodComponentWillUnMount /> */}
      {/* <ExceptionHandling /> */}
      {/* <Test /> */}
      {/* <SetStateAsObject /> */}
      {/* <SetStateAsObjectAndCallback /> */}
      {/* <SetStateWithCallback /> */}
      {/* <HOCExample /> */}
    </div>
  );
};
export default App;
