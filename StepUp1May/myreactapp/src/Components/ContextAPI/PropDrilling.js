import React from "react";

export const MainComp = () => {
  const data = "MAHARASTRA";
  return (
    <div>
      <h1>I'm Parent</h1>
      <A d={data} />
    </div>
  );
};

const A = ({ d }) => {
  return (
    <div>
      <h1>I'm A...</h1>
      <B data={d} />
    </div>
  );
};
const B = ({ data }) => {
  return (
    <div>
      <h1>I'm B</h1>
      <C data={data} />
    </div>
  );
};
const C = ({ data }) => {
  return (
    <div>
      <h1>I'm C</h1>
      <D myData={data} />
    </div>
  );
};
export const D = ({ myData }) => {
  return (
    <div>
      <h1>I'm D::{myData}</h1>
    </div>
  );
};
