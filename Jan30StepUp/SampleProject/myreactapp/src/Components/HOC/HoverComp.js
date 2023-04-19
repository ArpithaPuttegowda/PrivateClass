import React from "react";
import {myHoc} from "./myHoc";

const HoverComp = ({count, handleCount}) => {
  return <h1 onMouseOver={handleCount}>Hover me {count} </h1>;
};

export default myHoc(HoverComp);
