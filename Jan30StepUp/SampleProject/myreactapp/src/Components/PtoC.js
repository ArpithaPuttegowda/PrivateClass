import React from "react";

export const Parent = () => {
  const myData = "StepUp";
  return (
    <div>
      I'm Parent....
      <Child d={myData} />
    </div>
  );
};

const Child = ({d}) => {
  return <div>I'm Child....{d}</div>;
};
