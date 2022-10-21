import React from "react";
import {useSelector} from "react-redux";

export const C = () => {
  const state = useSelector((state) => state);
  console.log(state, "state");

  return (
    <div>
      <h1>Name::::{state?.nameLoc?.name}</h1>
      <h1>Loc::::{state?.nameLoc?.loc}</h1>
    </div>
  );
};
