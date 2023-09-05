import "./App.css";
import LifeCycleMounting from "./Components/LifeCycleMethods/LifeCycleMounting";
import LifeCycleUpdating from "./Components/LifeCycleMethods/LifeCycleUpdating";
function App() {
  return (
   <div>
    <LifeCycleUpdating name="Rahul" loc="mumbai"/>
    </div>
  );
}

export default App;
