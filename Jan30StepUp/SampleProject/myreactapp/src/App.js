import {Player} from "./Components/Player";
import {Parent} from "./Components/PtoC";

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Player name="Sachin" loc="mumbai" />
      <Player name="Dhoni" loc="ranchi" />
      <Player name="kohli" loc="delhi" />
      <Parent />
    </div>
  );
};
export default App;
