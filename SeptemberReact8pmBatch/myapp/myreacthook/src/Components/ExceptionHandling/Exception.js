import React, {Component} from "react";
import ErrorBoundaryReusableComponent from "./ErrorBoundaryReusableComponent";
import {Hero} from "./Hero";

export class Exception extends Component {
  render() {
    return (
      <>
        <ErrorBoundaryReusableComponent>
          <Hero heroName="joker">Hyderabad</Hero>
        </ErrorBoundaryReusableComponent>
        <ErrorBoundaryReusableComponent>
          <Hero heroName="Darshan" />
        </ErrorBoundaryReusableComponent>
      </>
    );
  }
}
