import React from "react";
import {useSelector} from "react-redux";

export const C = ({n, l}) => {
  const name = useSelector((store) => store?.nl?.name);
  return (
    <>
      <h1>Data from redux ::{name}</h1>
      <h1>Name:{n}</h1>
      <h1>Loc:{l}</h1>
    </>
  );
};
