import "./App.css";
import {Add} from "./Components/Add";
import Addclass from "./Components/AddC";
import Parent from "./Components/ChildToParent";
import {ParentF} from "./Components/ChildToParentF";
import ConditionalRendering from "./Components/ConditionalRendering";
import {ConditionalRenderingShortCircuit} from "./Components/ConditionalRenderingShortCircuit";
import {Context} from "./Components/ContextAPI/ContextAPI";
import ContextAPIC from "./Components/ContextAPI/ContextAPIC";
import {ContextAPIF} from "./Components/ContextAPI/ContextApiF";
import Count from "./Components/Count";
import {CountF} from "./Components/CountF";
import {Parent1} from "./Components/CtoP";
import {IncCount} from "./Components/IncCount";
import {DropDown} from "./Components/ListAndKeys/DropDown";
import {OrderedList} from "./Components/ListAndKeys/OrderedList";
import {ParaListKeys} from "./Components/ListAndKeys/ParaListKeys";
import {TableListkeys} from "./Components/ListAndKeys/TableListkeys";
import {WithoutContext} from "./Components/WithoutContext";

function App() {
  const data = ["red", "blue", "yellow", "pink", "green"];
  return (
    <div>
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
      {/* <Context /> */}
      {/* <ContextAPIC /> */}
      {/* <ContextAPIF /> */}
      {/* <OrderedList /> */}
      {/* <DropDown /> */}
      {/* <ParaListKeys /> */}
      <TableListkeys />
    </div>
  );
}

export default App;
