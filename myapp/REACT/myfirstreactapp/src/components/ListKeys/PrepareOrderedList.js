import React from "react";

export const PrepareOrderedList = () => {
  const colors = ["Red", "Yellow", "Blue", "Orange", "Pink", "Green", "White"];
  return (
    <div>
      <ol>
        {colors.map((color, index) => {
          return <li key={index + color}>{color}</li>;
        })}
      </ol>
    </div>
  );
};
