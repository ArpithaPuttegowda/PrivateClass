import "./App.css";
import {Count} from "./Components/ExampleUseReducer/Count";
import {CountReducer} from "./Components/ExampleUseReducer/CountReducer";

function App() {
  return (
    <div className="App">
      <Count />
      <CountReducer />
    </div>
  );
}

export default App;
