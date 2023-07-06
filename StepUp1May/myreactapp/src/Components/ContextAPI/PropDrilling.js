import React from "react";

export const MainComp = () => {
  const data = "MAHARASTRA";
  return (
    <div>
      <h1>I'm Parent</h1>
      <A />
    </div>
  );
};

const A = () => {
  return (
    <div>
      <h1>I'm A</h1>
      <B />
    </div>
  );
};
const B = () => {
  return (
    <div>
      <h1>I'm B</h1>
      <C />
    </div>
  );
};
const C = () => {
  return (
    <div>
      <h1>I'm C</h1>
      <D />
    </div>
  );
};
export const D = () => {
  return (
    <div>
      <h1>I'm D::</h1>
    </div>
  );
};
