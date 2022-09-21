import {ConditionalRendering} from "./components/ConditionalRendering";
import {ContextApi} from "./components/ContextApi";
import ExceptionHandling from "./components/ExceptionHandling/ExceptionHandling";
import Hero from "./components/ExceptionHandling/Hero";
import LifeCycleMethodComponentWillUnMount from "./components/LifeCycleMethodComponentWillUnMount";
import LifeCycleMethodsUpdation from "./components/LifeCycleMethodUpdating";
// import LifeCycleMethods from "./components/LifeCycleMethods";
import {TakeTheFormDataUseRef} from "./components/TakeDataByUseRef";
import TakeTheFormData from "./components/TakeTheFormData";

const App = () => {
  return (
    <div>
      {/* <ContextApi />
      <ConditionalRendering />
      <TakeTheFormData />
      <TakeTheFormDataUseRef /> */}
      {/* <LifeCycleMethods /> */}
      {/* <LifeCycleMethodsUpdation /> */}
      {/* <LifeCycleMethodComponentWillUnMount /> */}
      <ExceptionHandling />
    </div>
  );
};
export default App;
