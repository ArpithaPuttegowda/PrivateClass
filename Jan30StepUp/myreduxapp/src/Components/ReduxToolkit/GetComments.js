import React from "react";
import { useSelector } from "react-redux";
import { getComments } from "./ajaxSlice";

export const GetComments = () => {
  const comments = useSelector(getComments);
  return (
    <div>
      {comments.map((o, i) => {
        return <h1 key={o?.name + i}>{o?.name}</h1>;
      })}
    </div>
  );
};
