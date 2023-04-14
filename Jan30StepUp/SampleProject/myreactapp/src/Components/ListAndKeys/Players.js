import React from "react";

export const Players = () => {
  const player = [
    "Malinga",
    "ganguly",
    "sachin",
    "dhoni",
    "kohli",
    "panth",
    "sewag"
  ];
  return (
    <div>
      {player.map((name, index) => {
        return <h1 key={name + index}>{name}</h1>;
      })}
    </div>
  );
};
