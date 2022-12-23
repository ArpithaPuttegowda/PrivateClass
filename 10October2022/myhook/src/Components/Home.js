import React from "react";
import ErrorBoundary from "./ExceptionHandling/ErrorBoundary";
import {Hero} from "./ExceptionHandling/Hero";
import {VirtualDom} from "./VirtualDom";

const Home = () => {
  return (
    <div>
      <VirtualDom />
      <ErrorBoundary>
        <Hero heroName={"Sudeep"} />
      </ErrorBoundary>
    </div>
  );
};

export default Home;
