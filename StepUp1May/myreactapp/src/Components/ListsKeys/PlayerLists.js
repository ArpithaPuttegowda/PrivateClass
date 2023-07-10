import React from "react";

export const PlayerLists = () => {
  const myData = [
    "MM",
    "UV",
    "Sachin",
    "Dhoni",
    "Panth",
    "Kohli",
    "Rahul",
    "Sewag",
    "ll",
  ];
  return (
    <div>
      {myData.map((p, i) => {
        return <Player playerName={p} key={i + p} />;
      })}
    </div>
  );
};

const Player = ({ playerName }) => {
  return <h1>{playerName}</h1>;
};
