import "./App.css";
import ReduxMiddleware from "./Components/ReduxMiddleware";
import {ReduxToolkitEx} from "./ReduxToolkit/ReduxToolkitEx";

function App() {
  return (
    <div className="App">
      <ReduxMiddleware />
      <h1>
        <ReduxToolkitEx />
      </h1>
    </div>
  );
}

export default App;
