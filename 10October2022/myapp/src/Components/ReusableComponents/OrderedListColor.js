import React from "react";

export const OrderedListColor = () => {
  const colors = ["Red", "blue", "yellow"];
  return (
    <div>
      <ol>
        {colors.map((color, i) => {
          return <li key={i}>{color}</li>;
        })}
      </ol>
    </div>
  );
};
