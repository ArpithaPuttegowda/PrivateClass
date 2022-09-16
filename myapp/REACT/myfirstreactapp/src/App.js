import {ConditionalRendering} from "./components/ConditionalRendering";
import {ContextApi} from "./components/ContextApi";
import {TakeTheFormDataUseRef} from "./components/TakeDataByUseRef";
import TakeTheFormData from "./components/TakeTheFormData";

const App = () => {
  return (
    <div>
      <ContextApi />
      <ConditionalRendering />
      <TakeTheFormData />
      <TakeTheFormDataUseRef />
    </div>
  );
};
export default App;
