import React from "react";
import {ReusableComponent} from "./ReusableComponent";

export const About = () => {
  return (
    <div>
      About
      <ReusableComponent data={["Rose", "lilly"]} />
    </div>
  );
};
