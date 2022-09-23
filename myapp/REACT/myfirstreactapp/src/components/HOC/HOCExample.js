import React, {Component} from "react";
import ButtonComp from "./ButtonComp";
import HoverComp from "./HoverComp";

export default class HOCExample extends Component {
  render() {
    return (
      <div>
        <ButtonComp />
        <HoverComp />
      </div>
    );
  }
}
