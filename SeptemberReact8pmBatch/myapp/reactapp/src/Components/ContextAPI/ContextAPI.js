import React, {useContext} from "react";
import {ctx} from "./myCtx";

export const Context = () => {
  const data = "SACHIN";
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

const D = () => {
  return (
    <div>
      <h1>I'm D</h1>
      <E />
    </div>
  );
};

const E = () => {
  let data = useContext(ctx);
  alert(data);
  return (
    <div>
      <h1>I'm E.....{data}</h1>
    </div>
  );
};
