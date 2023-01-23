import "./App.css";
import {Count} from "./Components/ExampleUseReducer/Count";
import {CountReducer} from "./Components/ExampleUseReducer/CountReducer";
import {GlobalStateManagement} from "./Components/ExampleUseReducer/GlobalStatementUseReducer/GlobalStateManagement";

function App() {
  return (
    <div className="App">
      {/* <Count />
      <CountReducer /> */}
      <GlobalStateManagement />
    </div>
  );
}

export default App;
