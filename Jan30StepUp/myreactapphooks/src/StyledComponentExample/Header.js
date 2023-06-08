import React from "react";
import { Child } from "./Child";
import "./header.css";
import style from "./header.module.css";
import { StyledDiv } from "./styled";

export const Header = () => {
  return (
    <>
      <div id="header">Header</div>
      <div className={style.text}>My new project</div>
      <StyledDiv>This is the example of Styled component</StyledDiv>
      <StyledDiv>Pune</StyledDiv>
      <Child />
    </>
  );
};
