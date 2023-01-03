import React from "react";

export const Flowers = ({data}) => {
  return (
    <ol>
      {data?.map((flower, i) => {
        return <li key={i}>{flower}</li>;
      })}
    </ol>
  );
};
