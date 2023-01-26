import "./App.css";
import {Count} from "./Components/ExampleUseReducer/Count";
import {CountReducer} from "./Components/ExampleUseReducer/CountReducer";
import {GlobalStateManagement} from "./Components/ExampleUseReducer/GlobalStatementUseReducer/GlobalStateManagement";
import {ExampleUseTransition} from "./Components/Hooks/ExampleUseTransition";

function App() {
  return (
    <div className="App">
      {/* <Count />
      <CountReducer /> */}
      {/* <GlobalStateManagement /> */}
      <ExampleUseTransition />
    </div>
  );
}

export default App;
