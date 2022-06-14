import React from "react";
import {useSelector} from "react-redux";

export const C = () => {
  const {name} = useSelector((state) => state.nameReducer);
  const {loc} = useSelector((state) => state.locationReducer);
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Loc:{loc}</h1>
    </div>
  );
};
