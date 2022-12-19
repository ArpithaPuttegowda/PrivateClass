import React from "react";
import ErrorBoundaryReusableComponent from "./ExceptionHandling/ErrorBoundaryReusableComponent";
import {Hero} from "./ExceptionHandling/Hero";
import {ReusableComponent} from "./ReusableComponent";

const About = () => {
  return (
    <div>
      About
      <ReusableComponent data={["Rose", "lilly"]} />
      <ErrorBoundaryReusableComponent>
        <Hero heroName={"AR"} />
      </ErrorBoundaryReusableComponent>
    </div>
  );
};

export default About;
