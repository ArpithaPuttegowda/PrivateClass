import React, { createContext, useContext } from "react";

const ctx = createContext();
export const ContextComp = () => {
  const data = "MAHARASTRA";
  return (
    <div>
      <h1>Context API</h1>
      <h1>I'm Parent</h1>
      <ctx.Provider value={data}>
        <A />
      </ctx.Provider>
    </div>
  );
};

const A = () => {
  return (
    <div>
      <h1>I'm A...</h1>
      <B />
    </div>
  );
};
const B = () => {
  const d = useContext(ctx);
  return (
    <div>
      <h1>I'm B...{d}</h1>
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
  const data = useContext(ctx);
  return (
    <div>
      <h1>I'm D::{data}</h1>
    </div>
  );
};
