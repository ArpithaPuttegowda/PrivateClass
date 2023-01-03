import React from "react";

export const OrderListReusuable = ({data}) => {
  return (
    <ol>
      {data?.map((d, i) => {
        return <li key={i}>{d}</li>;
      })}
    </ol>
  );
};
