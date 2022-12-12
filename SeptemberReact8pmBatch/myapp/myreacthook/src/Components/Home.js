import React from "react";
import {ReusableComponent} from "./ReusableComponent";

export const Home = () => {
  return (
    <>
      <h1>
        This is Home
        <ReusableComponent data={["red", "blue"]} />
      </h1>
    </>
  );
};
