import React, {Component} from "react";
import {myHOC} from "./myHOC";

class ButtonComp extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.fn}>Click me {this.props.c}</button>
      </div>
    );
  }
}

export default myHOC(ButtonComp);
