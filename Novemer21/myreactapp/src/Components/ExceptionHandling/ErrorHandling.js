import React, {Component} from "react";
import ErrorBoundary from "./ErrorBoundary";
import {Hero} from "./Hero";

class ErrorHandling extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Hero heroName="Rajkumar">Arpitha</Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="VishnuVardan" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Punith" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="joker" />
        </ErrorBoundary>
      </div>
    );
  }
}

export default ErrorHandling;
