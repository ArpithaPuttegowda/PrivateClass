import React from "react";

export const OrderedListComp = ({data}) => {
  return (
    <ol>
      {data.map((val, i) => {
        return <li key={val + i}>{val}</li>;
      })}
    </ol>
  );
};
