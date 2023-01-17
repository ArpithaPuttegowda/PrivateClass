import React, {Component} from "react";
import ButtonComp from "./ButtonComp";
import HoverComp from "./HoverComp";

class BH extends Component {
  render() {
    return (
      <div>
        <ButtonComp />
        <HoverComp />
      </div>
    );
  }
}

export default BH;
