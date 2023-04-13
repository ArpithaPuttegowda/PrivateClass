import React, {Component} from "react";
import ErrorBoundary from "./ErrorBoundary";
import {Hero} from "./Hero";

class MyAnotherComp extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Hero heroName="AA" />
        </ErrorBoundary>
      </div>
    );
  }
}

export default MyAnotherComp;
