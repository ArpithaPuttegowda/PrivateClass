import React from "react";

export const OrderedList = () => {
  let colors = ["red", "green", "yellow", "black", "orange"];
  return (
    <div>
      <ol>
        {colors.map((color) => {
          return <li>{color}</li>;
        })}
      </ol>
    </div>
  );
};
