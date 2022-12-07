import React, {Component} from "react";
import {myHoc} from "./myHoc";

class HoverComp extends Component {
  render() {
    return (
      <div>
        <h1 onMouseOver={}>Hover me{}</h1>
      </div>
    );
  }
}

export default myHoc(HoverComp);
