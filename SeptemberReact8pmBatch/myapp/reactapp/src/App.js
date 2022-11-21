import "./App.css";
import {Add} from "./Components/Add";
import Addclass from "./Components/AddC";
import Parent from "./Components/ChildToParent";
import {ParentF} from "./Components/ChildToParentF";
import ConditionalRendering from "./Components/ConditionalRendering";
import {ConditionalRenderingShortCircuit} from "./Components/ConditionalRenderingShortCircuit";
import {Context} from "./Components/ContextAPI/ContextAPI";
import Count from "./Components/Count";
import {CountF} from "./Components/CountF";
import {Parent1} from "./Components/CtoP";
import {IncCount} from "./Components/IncCount";
import {WithoutContext} from "./Components/WithoutContext";

function App() {
  return (
    <div className="App">
      {/* <Count />
      <CountF />
      <IncCount />
      <Add />
      <Addclass /> */}
      {/* <ConditionalRendering /> */}
      {/* <ConditionalRenderingShortCircuit /> */}
      {/* <Parent /> */}
      {/* <ParentF /> */}
      {/* <Parent1 /> */}
      {/* <WithoutContext /> */}
      <Context />
    </div>
  );
}

export default App;
