import React from "react";

export const Parent = () => {
  const data = "Mumbai";
  return (
    <div>
      <Child myData={data} />
    </div>
  );
};

const Child = ({myData}) => {
  return <div>I'm Child....{myData}</div>;
};
