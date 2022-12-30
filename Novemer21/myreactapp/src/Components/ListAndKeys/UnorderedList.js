import React from "react";

export const UnOrderedList = () => {
  let colors = [
    "gray",
    "pink",
    "red",
    "green",
    "yellow",
    "black",
    "orange",
    "white"
  ];
  return (
    <div>
      <ul>
        {colors.map((color, index) => {
          return <li key={index}>{color}</li>;
        })}
      </ul>
    </div>
  );
};
