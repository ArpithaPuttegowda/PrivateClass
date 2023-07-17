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
import LifeCycleMounting from "./Components/LifeCycleMethods/LifeCycleMounting";
import LifeCycleUpdating from "./Components/LifeCycleMethods/LifeCycleUpdating";
import { DropdownListKeys } from "./Components/ListsKeys/DropdownListKeys";
import { HeaderList } from "./Components/ListsKeys/HeaderList";
import { OrderedListKeys } from "./Components/ListsKeys/OrderedListKeys";
import { PlayerLists } from "./Components/ListsKeys/PlayerLists";
import { TableComp } from "./Components/ListsKeys/TableComp";
import { ListsComp } from "./Components/ListsKeys/UnorderedList";
import { Parent2 } from "./Components/ParentToChild/ParentToChild2";

function App() {
  return (
    <div>
      {/* <ConditionalRendering1 /> */}
      {/* <ConditionalRendering2 /> */}
      {/* <LifeCycleMounting /> */}
      <LifeCycleUpdating />
    </div>
  );
}

export default App;
