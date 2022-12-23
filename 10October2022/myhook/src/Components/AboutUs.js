import React from "react";
import {ComponentWillUnMountUseEffect} from "./ComponentWillUnMountUseEffect";
import ErrorBoundary from "./ExceptionHandling/ErrorBoundary";
import {Hero} from "./ExceptionHandling/Hero";

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <ErrorBoundary>
            <Hero heroName={"joker"} />
          </ErrorBoundary>
          <ErrorBoundary>
            <Hero heroName={"Jiranjivi"} />
          </ErrorBoundary>
          <ComponentWillUnMountUseEffect />
        </h1>
      </div>
    );
  }
}

export default AboutUs;
