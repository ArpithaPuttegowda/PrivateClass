import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentsAction } from "./actionComments";
import { getLoc, getName } from "./nameLocSlice";

export const C = () => {
  const dispatch = useDispatch();
  const name = useSelector(getName);
  const loc = useSelector(getLoc);
  const handleComments = () => {
    commentsAction(dispatch);
  };
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Loc:{loc}</h1>
      <button onClick={handleComments}>Comments</button>
    </div>
  );
};
