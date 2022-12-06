import React, {Component} from "react";
import {myHoc} from "./myHOC";

class ButtonComp extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.f}>click me{this.props.c}</button>
      </div>
    );
  }
}

export default myHoc(ButtonComp);
