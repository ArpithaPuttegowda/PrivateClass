import React, {Component} from "react";
import Button from "./HOC/Button";
import Hover from "./HOC/Hover";
import ResualbeComponents from "./ResualbeComponents";

export default class HOC extends Component {
  render() {
    return (
      <div>
        <Button></Button>
        <Hover></Hover>
        <ResualbeComponents data={["RED", "BLUe", "Yellow"]} />
      </div>
    );
  }
}
