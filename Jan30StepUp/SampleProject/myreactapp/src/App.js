import React, {Component} from "react";
import LifeCycleUnMounting2 from "./Components/LifeCycleMethods/LifeCycleUnMounting2";
import SetStateObject from "./Components/SetStateArguments/SetStateObject";
import SetStateObjectCallBack from "./Components/SetStateArguments/SetStateObjectCallback";

class App extends Component {
  render() {
    return (
      <div>
        {/* <LifeCycleUnMounting2 /> */}
        {/* <SetStateObject /> */}
        <SetStateObjectCallBack />
      </div>
    );
  }
}

export default App;
