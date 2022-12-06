import React, {Component} from "react";
import {myHoc} from "./myHOC";

const HoverComp = ({c, f}) => {
  return <h1 onMouseOver={f}>Hover me{c}</h1>;
};

export default myHoc(HoverComp);
