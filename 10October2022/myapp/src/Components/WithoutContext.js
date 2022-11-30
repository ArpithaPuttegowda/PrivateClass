import React from "react";

export const WithoutContext = () => {
  const data = "Sachin";
  return (
    <div>
      <A d={data} />
    </div>
  );
};

const A = ({d}) => {
  return (
    <h1>
      I'm A:::
      <B myData={d} />
    </h1>
  );
};
const B = ({myData}) => (
  <h1>
    I'm B:::
    <C data={myData} />
  </h1>
);

const C = ({data}) => (
  <h1>
    I'm C::
    <D myData={data} />
  </h1>
);
const D = ({myData}) => <h1>I'm D:::{myData}</h1>;
