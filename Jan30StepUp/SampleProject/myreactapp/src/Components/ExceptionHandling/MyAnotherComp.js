import React, {Component} from "react";
import {Hero} from "./Hero";

class MyAnotherComp extends Component {
  constructor() {
    super();
    this.state = {
      isError: false
    };
  }
  static getDerivedStateFromError() {
    alert("componentdidCatch called");
    return {
      isError: true
    };
  }
  componentDidCatch(e) {
    console.log(e, "myError message");
  }
  render() {
    return (
      <div>
        {this.state.isError ? (
          "something went wrong"
        ) : (
          <Hero heroName="joker" />
        )}
      </div>
    );
  }
}

export default MyAnotherComp;
