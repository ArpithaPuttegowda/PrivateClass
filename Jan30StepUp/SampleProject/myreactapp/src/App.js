import {useState} from "react";
import "./App.css";
import AddC from "./Components/AddC";
import {AddF} from "./Components/AddF";
import {ContextAPI2} from "./Components/ContextAPI/ContextAPI2";
import {ContextAPI3} from "./Components/ContextAPI/ContextAPI3";
import ContextAPIClass from "./Components/ContextAPI/ContextAPIClass";
import ContextAPIF from "./Components/ContextAPI/ContextAPIF";
// import PropDrilling from "./Components/ContextAPI/PropDrilling";
import Count from "./Components/Count";
import {CountF} from "./Components/CountF";
import Parent from "./Components/CtoPclass";
import {ParentFunctional} from "./Components/CtoPFunctional";
import {LifeCycleMethodF} from "./Components/LifeCycleMethods/LifeCycleMethodF";
import LifeCycleMethodMouting from "./Components/LifeCycleMethods/LifeCycleMethodMouting";
import LifeCycleMethodsUnmounting from "./Components/LifeCycleMethods/LifeCycleMethodsUnmounting";
import LifeCycleMethodsUpdating from "./Components/LifeCycleMethods/LifeCycleMethodsUpdating";
import {NameChangeF} from "./Components/NameChangeF";
import {Player} from "./Components/Player";
import PlayerC from "./Components/PlayerC";
// import {Parent} from "./Components/PtoC";
import ParentC from "./Components/PtoCClass";

const App = () => {
  const [name, setName] = useState("Sachin");
  const handleChangeName = () => {
    name === "Sachin" ? setName("Dhoni") : setName("Sachin");
  };
  return (
    <div>
      {/* <h1>App</h1>
      {/* <Player name="Sachin" loc="mumbai" />
      <Player name="Dhoni" loc="ranchi" />
      <Player name="kohli" loc="delhi" />
      <Parent />
      <h1>This is class component</h1>
      <PlayerC loc="Mumbai" />
      <PlayerC name="Dhoni" loc="Ranchi" />
      <PlayerC name="Kohli" loc="Delhi" />
      <ParentC /> */}
      {/* <Count /> */}
      {/* <CountF />
      <NameChangeF /> */}
      {/* <AddC /> */}
      {/* <AddF /> */}
      {/* <Parent /> */}
      {/* <ParentFunctional /> */}
      {/* <PropDrilling /> */}
      {/* <ContextAPIClass />
      <ContextAPIF /> */}
      {/* <ContextAPI2 /> */}
      {/* <ContextAPI3 /> */}
      {/* <LifeCycleMethodMouting /> */}
      {/* <LifeCycleMethodsUpdating data={name} />
      <button onMouseOver={handleChangeName}>Change Name</button> */}
      {/* <LifeCycleMethodsUnmounting /> */}
      <LifeCycleMethodF />
    </div>
  );
};
export default App;
