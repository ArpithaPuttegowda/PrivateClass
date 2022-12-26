import React from "react";

export const WithoutContextAPI = () => {
  const data = "Hyderabad";
  return (
    <div>
      WithoutContextAPI
      <A myData={data} />
    </div>
  );
};

const A = ({myData}) => {
  return (
    <div>
      I'm A:::
      <B data={myData} />
    </div>
  );
};
const B = ({data}) => {
  return (
    <div>
      I'm B...
      <C d={data} />
    </div>
  );
};
const C = ({d}) => {
  return (
    <div>
      I'm C...
      <D myData={d} />
    </div>
  );
};
const D = ({myData}) => {
  return <div>I'm D....{myData}</div>;
};
