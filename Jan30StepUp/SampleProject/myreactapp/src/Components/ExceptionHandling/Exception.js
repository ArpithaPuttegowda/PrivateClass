import React, {Component} from "react";
import ErrorBoundary from "./ErrorBoundary";
import {Hero} from "./Hero";

class Exception extends Component {
  render() {
    return (
      <div>
        <>
          <ErrorBoundary>
            <Hero heroName="Prabas">Pune</Hero>
          </ErrorBoundary>
          <ErrorBoundary>
            <Hero heroName="MB" />
          </ErrorBoundary>
          <ErrorBoundary>
            <Hero heroName="joker" />
          </ErrorBoundary>
        </>
      </div>
    );
  }
}

export default Exception;
