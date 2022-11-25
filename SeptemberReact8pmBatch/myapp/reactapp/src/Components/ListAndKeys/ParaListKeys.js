import React from "react";

export const ParaListKeys = () => {
  let sachinInfo = {
    name: "Sachin",
    loc: "Mumbai",
    runs: 10
  };
  return (
    <div>
      {Object.entries(sachinInfo).map((arr) => {
        return (
          <p>
            <b>{arr[0]}:::</b>
            {arr[1]}
          </p>
        );
      })}
    </div>
  );
};
