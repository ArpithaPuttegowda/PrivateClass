import React, {Component} from "react";
import ButtonComp from "./ButtonComp";
import HoverComp from "./HoverComp";

class ParentComp extends Component {
  render() {
    return (
      <div>
        <ButtonComp />
        <HoverComp />
      </div>
    );
  }
}

export default ParentComp;
