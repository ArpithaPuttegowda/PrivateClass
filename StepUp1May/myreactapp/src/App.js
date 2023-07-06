import "./App.css";
import { Parent3 } from "./Components/ChildToParent/PassingDataFromChildToParent";
import { PassingDataFromChildToParent2 } from "./Components/ChildToParent/PassingDataFromChildToParent2";
import { MainComp } from "./Components/ContextAPI/PropDrilling";
import { Parent2 } from "./Components/ParentToChild/ParentToChild2";

function App() {
  return (
    <div>
      App
      {/* <Parent3 />
      <PassingDataFromChildToParent2 /> */}
      <MainComp />
    </div>
  );
}

export default App;
