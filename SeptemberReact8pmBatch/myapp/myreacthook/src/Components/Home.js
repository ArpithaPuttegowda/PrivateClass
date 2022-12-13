import React from "react";
import {ReusableComponent} from "./ReusableComponent";

const Home = () => {
  return (
    <>
      <h1>
        This is Home
        <ReusableComponent data={["red", "blue"]} />
      </h1>
    </>
  );
};

export default Home;
