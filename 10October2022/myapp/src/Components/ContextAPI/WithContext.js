import React, {useContext} from "react";
import {ctx} from "./ctx";

export const WithContext = () => {
  const data = "Sachin";
  return (
    <div>
      <ctx.Provider value={data}>
        <A />
      </ctx.Provider>
    </div>
  );
};

const A = () => {
  return (
    <h1>
      I'm A:::
      <B />
    </h1>
  );
};
const B = () => {
  return (
    <h1>
      I'm B:::<ctx.Consumer>{(data) => <span>{data}</span>}</ctx.Consumer>
      <C />
    </h1>
  );
};

const C = () => {
  const data = useContext(ctx);
  return (
    <h1>
      I'm C::{data}
      <D />
    </h1>
  );
};

const D = () => {
  const data = useContext(ctx);
  console.log(data, "data D");
  return <h1>I'm D:::{data}</h1>;
};
