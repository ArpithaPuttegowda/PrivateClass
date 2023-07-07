import "./App.css";
import { Parent3 } from "./Components/ChildToParent/PassingDataFromChildToParent";
import { PassingDataFromChildToParent2 } from "./Components/ChildToParent/PassingDataFromChildToParent2";
import { ContextAPI2 } from "./Components/ContextAPI/ContextAPI2";
import { ContextAPI3 } from "./Components/ContextAPI/ContextAPI3";
import { ContextComp } from "./Components/ContextAPI/ContextAPITechnique";
import { MainComp } from "./Components/ContextAPI/PropDrilling";
import { Parent2 } from "./Components/ParentToChild/ParentToChild2";

function App() {
  return (
    <div>
      App
      {/* <Parent3 />
      <PassingDataFromChildToParent2 /> */}
      {/* <MainComp /> */}
      {/* <ContextComp /> */}
      {/* <ContextAPI2 /> */}
      <ContextAPI3 />
    </div>
  );
}

export default App;
