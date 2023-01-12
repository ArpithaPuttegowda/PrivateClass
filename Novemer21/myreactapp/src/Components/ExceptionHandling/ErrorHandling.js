import React, {Component} from "react";
import {Hero} from "./Hero";

class ErrorHandling extends Component {
  constructor() {
    super();
    this.state = {
      isError: false
    };
  }
  static getDerivedStateFromError() {
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
            <Hero heroName="Rajkumar" />
            <Hero heroName="VishnuVardan" />
            <Hero heroName="Punith" />
            {/* <Hero heroName="joker" /> */}
          </>
        )}
      </div>
    );
  }
}

export default ErrorHandling;
