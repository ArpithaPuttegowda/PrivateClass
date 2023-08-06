import React, { Component } from "react";
import ErrorBoundaryResualble from "./ErrorBoundaryResualble";
import { Exception2 } from "./Exception2";
import { Hero } from "./Hero";

export default class ExceptionHandlingParent extends Component {
  render() {
    return (
      <div>
        <ErrorBoundaryResualble>
          <Hero heroName="Salman">
            <Content />
          </Hero>
        </ErrorBoundaryResualble>
        <ErrorBoundaryResualble>
          <Hero heroName="Hruthik" />
        </ErrorBoundaryResualble>
        <ErrorBoundaryResualble>
          <Hero heroName="joker" />
        </ErrorBoundaryResualble>
        <ErrorBoundaryResualble>
          <Hero heroName="joker" />
        </ErrorBoundaryResualble>
        <ErrorBoundaryResualble>
        <Exception2 name="Sachin"/>
        </ErrorBoundaryResualble>
        <ErrorBoundaryResualble>
        <Exception2 />
        </ErrorBoundaryResualble>
      </div>
    );
  }
}

const Content = () => {
  return <h1>It's a content</h1>;
};
