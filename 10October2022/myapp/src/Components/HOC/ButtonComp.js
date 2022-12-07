import React, {Component} from "react";
import {myHoc} from "./myHoc";

class ButtonComp extends Component {
  render() {
    return (
      <div>
        <button onClick={}>Click me</button>
      </div>
    );
  }
}

export default myHoc(ButtonComp);
