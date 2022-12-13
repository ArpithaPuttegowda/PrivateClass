import React from "react";
import {ReusableComponent} from "./ReusableComponent";

const About = () => {
  return (
    <div>
      About
      <ReusableComponent data={["Rose", "lilly"]} />
    </div>
  );
};

export default About;
