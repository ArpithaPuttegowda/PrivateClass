import React from "react";
import {InputReusuable} from "./InputReusuable";

export const Registration = () => {
  return (
    <div>
      <InputReusuable lbl={"Name"} type="text" name="name" />
      <InputReusuable lbl="Password" type="password" name="pwd" />
      <InputReusuable lbl={"Male"} type="radio" name="gen" />
      <InputReusuable lbl={"Female"} type="radio" name="gen" />
    </div>
  );
};
