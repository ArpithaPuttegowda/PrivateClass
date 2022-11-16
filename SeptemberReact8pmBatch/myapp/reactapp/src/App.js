import "./App.css";
import {Add} from "./Components/Add";
import Count from "./Components/Count";
import {CountF} from "./Components/CountF";
import {IncCount} from "./Components/IncCount";

function App() {
  return (
    <div className="App">
      <Count />
      <CountF />
      <IncCount />
      <Add />
    </div>
  );
}

export default App;
