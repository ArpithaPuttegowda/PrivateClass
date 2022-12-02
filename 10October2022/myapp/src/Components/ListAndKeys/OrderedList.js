import React from "react";

export const OrderedList = () => {
  let data = ["Sewag", "Raina", "UV", "Sachin", "Dhoni", "Kohli", "Ganguly"];
  return (
    <div>
      <ol>
        {data.map((v, i) => {
          return <li key={i}> {v}</li>;
        })}
      </ol>
    </div>
  );
};
