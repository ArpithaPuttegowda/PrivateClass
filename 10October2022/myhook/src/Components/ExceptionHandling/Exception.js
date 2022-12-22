import React, {Component} from "react";
import {Hero} from "./Hero";

export class Exception extends Component {
  static getDerivedStateFromError() {
    alert("exception occurd for the child");
  }
  componentDidCatch(e) {
    console.log(e);
  }
  render() {
    return (
      <div>
        <Hero heroName={"Jiranjeevi"} />
        <Hero heroName={"Allu Arjun"} />
        <Hero heroName={"joker"} />
      </div>
    );
  }
}
