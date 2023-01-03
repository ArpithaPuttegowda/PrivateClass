import React from "react";

export const ColorList = () => {
  const colors = ["red", "blue"];
  return (
    <ol>
      {colors.map((c, i) => {
        return <li key={i}>{c}</li>;
      })}
    </ol>
  );
};
