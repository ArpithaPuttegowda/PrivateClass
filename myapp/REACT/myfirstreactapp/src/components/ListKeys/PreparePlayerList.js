import React from "react";

export const PreparePlayerList = () => {
  const data = ["Rahul", "Sachin", "Dhoni", "Kohli", "Panth"];
  return (
    <div>
      {data.map((item, index) => {
        return <p key={index + item}>{item}</p>;
      })}
    </div>
  );
};
