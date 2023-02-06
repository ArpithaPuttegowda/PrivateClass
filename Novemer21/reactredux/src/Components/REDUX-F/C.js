import React from "react";
import {useSelector} from "react-redux";

export const C = () => {
  const myState = useSelector((state) => state);
  console.log(myState);
  return (
    <div>
      <h1>Name:{myState?.nl?.name}</h1>
      <h1>Loc:{myState.nl.loc}</h1>
    </div>
  );
};
