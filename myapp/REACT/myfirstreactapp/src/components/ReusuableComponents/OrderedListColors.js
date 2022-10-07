import React from "react";

export const OrderedListColors = () => {
  const colors = ["red", "blue", "green"];
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
