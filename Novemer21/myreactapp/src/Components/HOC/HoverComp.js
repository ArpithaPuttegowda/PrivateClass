import React, {Component} from "react";
import {myHOC} from "./myHOC";

class HoverComp extends Component {
  render() {
    return (
      <div>
        <h1 onMouseOver={this.props.fn}>Hover me {this.props.c}</h1>
      </div>
    );
  }
}

export default myHOC(HoverComp);
