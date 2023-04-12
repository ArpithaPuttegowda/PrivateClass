import React, {Component} from "react";
import {Hero} from "./Hero";

class Exception extends Component {
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
          <>
            <Hero heroName="Prabas">Pune</Hero>
            <Hero heroName="MB" />
            <Hero heroName="joker" />
          </>
        )}
      </div>
    );
  }
}

export default Exception;
