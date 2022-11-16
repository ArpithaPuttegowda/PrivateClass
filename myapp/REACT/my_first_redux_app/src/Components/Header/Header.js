import React, {useContext} from "react";
import {ctx} from "../../App";

export const Header = () => {
  const data = useContext(ctx);
  console.log(data, "data");
  return <div id="header">My First React App</div>;
};
