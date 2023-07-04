import "./App.css";
import { Parent3 } from "./Components/ChildToParent/PassingDataFromChildToParent";
import { Parent2 } from "./Components/ParentToChild/ParentToChild2";

function App() {
  return (
    <div>
      App
      <Parent3 />
    </div>
  );
}

export default App;
