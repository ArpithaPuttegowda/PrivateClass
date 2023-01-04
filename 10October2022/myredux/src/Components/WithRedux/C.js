import React from "react";
import {useSelector} from "react-redux";

export const C = () => {
  const completeState = useSelector((s) => s);
  return (
    <div>
      <h1>Name:{completeState?.nameLoc?.name}</h1>
      <h1>Loc:{completeState?.nameLoc?.loc}</h1>
    </div>
  );
};
