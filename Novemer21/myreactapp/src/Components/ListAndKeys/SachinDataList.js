import React from "react";

export const SachinDataList = () => {
  let sachinData = {
    name: "Sachin",
    loc: "Mumbai",
    pinCode: 123,
    runs: 20
  };
  return (
    <div>
      {Object.entries(sachinData).map((arr, index) => {
        return (
          <h1>
            {arr[0]}::{arr[1]}
          </h1>
        );
      })}
    </div>
  );
};
