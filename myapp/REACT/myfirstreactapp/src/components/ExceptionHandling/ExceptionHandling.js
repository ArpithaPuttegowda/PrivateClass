import React, {Component} from "react";
import ErrorBoundaryGeneric from "./ErrorBoundaryGeneric";
import Hero from "./Hero";

export default class ExceptionHandling extends Component {
  render() {
    return (
      <div>
        <ErrorBoundaryGeneric>
          <Hero hero="Sharuk">Arpitha</Hero>
        </ErrorBoundaryGeneric>
        <ErrorBoundaryGeneric>
          <Hero hero="joker" />
        </ErrorBoundaryGeneric>
        <ErrorBoundaryGeneric>
          <Hero hero="joker" />
        </ErrorBoundaryGeneric>
      </div>
    );
  }
}
