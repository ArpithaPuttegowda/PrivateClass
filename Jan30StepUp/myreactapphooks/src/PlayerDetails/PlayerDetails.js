import React from "react";

export const PlayerDetails = ({ name, loc }) => {
  return (
    <div>
      <b>Name:</b>
      <span>{name}</span>
      <b>Loc:</b>
      <span>{loc}</span>
    </div>
  );
};
