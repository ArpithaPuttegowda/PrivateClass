import React, {Component} from "react";
import Button from "./HOC/Button";
import Hover from "./HOC/Hover";

export default class HOC extends Component {
  render() {
    return (
      <div>
        <Button></Button>
        <Hover></Hover>
      </div>
    );
  }
}
