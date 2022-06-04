import React, {Component} from "react";
import ResualbeComponents from "./ResualbeComponents";

export default class Home extends Component {
  render() {
    return (
      <div>
        Home
        <ResualbeComponents data={["Sachin", "DHONI", "Kohli"]} />
      </div>
    );
  }
}
