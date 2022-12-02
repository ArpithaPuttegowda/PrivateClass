import React from "react";

export const UnorderList = () => {
  const data = ["red", "blue", "green", "yellow"];
  return (
    <div>
      <ul>
        {data.map((clr, i) => {
          return <li key={i}>{clr}</li>;
        })}
      </ul>
    </div>
  );
};
