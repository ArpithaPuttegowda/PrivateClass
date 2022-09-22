import React, {Component} from "react";
import ErrorBoundaryGeneric from "./ErrorBoundaryGeneric";
import Hero from "./Hero";

export default class Test extends Component {
  state = {
    isError: false
  };
  static getDerivedStateFromError() {
    alert("Exception occured");
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
        <ErrorBoundaryGeneric>
          <Hero hero="Sharuk">Arpitha</Hero>
        </ErrorBoundaryGeneric>
        <ErrorBoundaryGeneric>
          <Hero hero="Prabhas" />
        </ErrorBoundaryGeneric>
        <ErrorBoundaryGeneric>
          <Hero hero="joker" />
        </ErrorBoundaryGeneric>
      </div>
    );
  }
}
