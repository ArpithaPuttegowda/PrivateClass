import React from "react";
import {Link} from "react-router-dom";
import {ReusableComponent} from "./ReusableComponent";

const Home = () => {
  return (
    <>
      <h1>
        This is Home
        <Link to="home-sublink">Home-sublink</Link>
        <ReusableComponent data={["red", "blue"]} />
      </h1>
    </>
  );
};

export default Home;
