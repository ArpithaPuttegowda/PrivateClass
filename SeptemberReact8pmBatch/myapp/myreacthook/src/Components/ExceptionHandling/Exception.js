import React, {Component} from "react";
import {Hero} from "./Hero";

export class Exception extends Component {
  state = {
    isError: false
  };
  static getDerivedStateFromError() {
    alert("getDerivedStateFromError called");
    return {
      isError: true
    };
  }
  componentDidCatch(e) {
    console.log(e);
  }
  render() {
    return (
      <div>
        {this.state.isError ? (
          <h1>Something went wrong</h1>
        ) : (
          <>
            <Hero heroName="Prabhas" />
            <Hero heroName="Darshan" />
          </>
        )}
      </div>
    );
  }
}
