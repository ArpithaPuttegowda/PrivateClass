import "./App.css";
import AddC from "./Components/AddC";
import {AddF} from "./Components/AddF";
import Count from "./Components/Count";
import {CountF} from "./Components/CountF";
import {NameChangeF} from "./Components/NameChangeF";
import {Player} from "./Components/Player";
import PlayerC from "./Components/PlayerC";
import {Parent} from "./Components/PtoC";
import ParentC from "./Components/PtoCClass";

const App = () => {
  return (
    <div>
      {/* <h1>App</h1> */}
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
      <AddF />
    </div>
  );
};
export default App;
