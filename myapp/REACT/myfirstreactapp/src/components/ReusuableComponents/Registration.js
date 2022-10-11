import React from "react";
import {Input} from "./Input";

export const Registration = () => {
  return (
    <div>
      <Input lbl="Name" type="text" required={true} />
      <Input lbl="Password" type="password" required={true} />
      <p>
        Hobbies
        <Input type="checkbox" lbl="volleyball" />
        <Input type="checkbox" lbl="chess" />
      </p>
    </div>
  );
};
