import React, {Component} from "react";
import {myHoc} from "./myHoc";

class ButtonComp extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.fn}>Click me{this.props.count}</button>
      </div>
    );
  }
}

export default myHoc(ButtonComp);
