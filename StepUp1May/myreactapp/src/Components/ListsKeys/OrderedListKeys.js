import React from "react";

export const OrderedListKeys = () => {
  const colors = ["Red", "Blue", "Yellow"];
  return (
    <ol>
      {colors.map((v, i) => {
        console.log(i);
        return <li key={v + i}>{v}</li>;
      })}
    </ol>
  );
};
