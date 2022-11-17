import "./App.css";
import {Add} from "./Components/Add";
import Addclass from "./Components/AddC";
import {ConditionalRendering} from "./Components/ConditionalRendering";
import {ConditionalRenderingShortCircuit} from "./Components/ConditionalRenderingShortCircuit";
import Count from "./Components/Count";
import {CountF} from "./Components/CountF";
import {IncCount} from "./Components/IncCount";

function App() {
  return (
    <div className="App">
      {/* <Count />
      <CountF />
      <IncCount />
      <Add />
      <Addclass /> */}
      {/* <ConditionalRendering /> */}
      <ConditionalRenderingShortCircuit />
    </div>
  );
}

export default App;
