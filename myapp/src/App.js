import {Component} from "react";
import "./App.css";
import ReferenceAsCallback from "./ReferenceAsCallback";
import SetStateAsObject from "./SetStateAsObject";
import SetStateAsObjectAndCallback from "./SetStateAsObjectAndCallback";

class App extends Component {
  render() {
    return (
      <>
        {/* <ReferenceAsCallback /> */}
        {/* <SetStateAsObject /> */}
        <SetStateAsObjectAndCallback />
      </>
    );
  }
}
export default App;
