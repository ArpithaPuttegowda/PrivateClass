import React, {Component} from "react";
import {Hero} from "./Hero";

class Exception extends Component {
  render() {
    return (
      <div>
        <Hero heroName="Prabas" />
        <Hero heroName="MB" />
        <Hero heroName="joker" />
      </div>
    );
  }
}

export default Exception;
