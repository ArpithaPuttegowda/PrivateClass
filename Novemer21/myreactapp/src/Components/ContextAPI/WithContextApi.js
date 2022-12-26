import React, {useContext} from "react";
import {ctx} from "./ctx";

export const WithContextApi = () => {
  const data = "KARNATAKA";
  return (
    <div>
      <ctx.Provider value={data}>
        <A />
      </ctx.Provider>
    </div>
  );
};

const A = () => {
  let data = useContext(ctx);
  return (
    <div>
      I'm A ...{data}
      <B />
    </div>
  );
};

const B = () => {
  return (
    <div>
      I'm B...
      <C />
    </div>
  );
};
const C = () => {
  return (
    <div>
      I'm C...
      <D />
    </div>
  );
};

const D = () => {
  return (
    <div>
      I'm D..
      <ctx.Consumer>{(data) => <h1>{data}</h1>}</ctx.Consumer>
    </div>
  );
};
