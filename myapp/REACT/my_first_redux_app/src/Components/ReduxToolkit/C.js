import React from "react";
import {useSelector} from "react-redux";

export const C = () => {
  const state = useSelector((state) => state);
  console.log(state, "state");
  return (
    <div>
      <h1>Name:::{state.nameLocRed?.name}</h1>
      <h1>Loc::::{state.nameLocRed?.loc}</h1>
    </div>
  );
};
