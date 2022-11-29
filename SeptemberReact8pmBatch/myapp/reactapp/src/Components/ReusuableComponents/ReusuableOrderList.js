import React from "react";

export const ReusuableOrderList = ({data}) => {
  return (
    <div>
      <ol>
        {data?.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ol>
    </div>
  );
};
