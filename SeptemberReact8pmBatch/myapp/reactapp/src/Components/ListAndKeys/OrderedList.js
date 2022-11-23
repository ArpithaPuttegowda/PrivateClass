import React from "react";

export const OrderedList = ({d}) => {
  return (
    <ol>
      {d?.map((v, i) => {
        return <li>{v}</li>;
      })}
    </ol>
  );
};
