import React from "react";

export const MyColorOrder = () => {
  const color = ["red", "blue", "yellow"];
  return (
    <div>
      <ol>
        {color.map((clr, index) => {
          return <li>{clr}</li>;
        })}
      </ol>
    </div>
  );
};
