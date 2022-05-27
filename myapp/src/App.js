import {Component} from "react";
import "./App.css";
import ReferenceAsCallback from "./Components/ReferenceAsCallback";
import ReferenceUsingOnChange from "./Components/ReferenceUsingOnChange";
import SetStateCallback from "./Components/SetStateCallback";
import SetStateAsObject from "./SetStateAsObject";
import SetStateAsObjectAndCallback from "./SetStateAsObjectAndCallback";

class App extends Component {
  render() {
    return (
      <>
        {/* <ReferenceAsCallback /> */}
        {/* <SetStateAsObject /> */}
        {/* <SetStateAsObjectAndCallback /> */}
        {/* <SetStateCallback /> */}
        <ReferenceUsingOnChange />
      </>
    );
  }
}
export default App;
