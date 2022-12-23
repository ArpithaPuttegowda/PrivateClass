import React, {Component} from "react";
import ErrorBoundary from "./ErrorBoundary";
import {Hero} from "./Hero";

export class Exception extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Hero heroName={"Jiranjeevi"}>Arpitha</Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName={"Allu Arjun"} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName={"joker"} />
        </ErrorBoundary>
      </div>
    );
  }
}
