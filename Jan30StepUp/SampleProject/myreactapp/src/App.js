import React, {Component} from "react";
import {Form} from "./Components/ControlledComponents/Form";
import {AjaxWithUseEffect} from "./Components/ExamplesofUseEffects/AjaxWithUseEffect";
import {Timer} from "./Components/ExamplesofUseEffects/Timer";
import Exception from "./Components/ExceptionHandling/Exception";
import MyAnotherComp from "./Components/ExceptionHandling/MyAnotherComp";
import LifeCycleUnMounting2 from "./Components/LifeCycleMethods/LifeCycleUnMounting2";
import SetStateCallback from "./Components/SetStateArguments/SetStateCallback";
import SetStateObject from "./Components/SetStateArguments/SetStateObject";
import SetStateObjectCallBack from "./Components/SetStateArguments/SetStateObjectCallback";
import VirtualDOM from "./Components/VirtualDOM";

class App extends Component {
  render() {
    return (
      <div>
        {/* <LifeCycleUnMounting2 /> */}
        {/* <SetStateObject /> */}
        {/* <SetStateObjectCallBack /> */}
        {/* <SetStateCallback /> */}
        {/* <VirtualDOM /> */}
        {/* <Timer /> */}
        {/* <AjaxWithUseEffect /> */}
        {/* <Form /> */}
        <Exception />
        <MyAnotherComp />
      </div>
    );
  }
}

export default App;
