import React, {useContext} from "react";
import {ctx} from "../utils/myContext";

export const ContextApi = () => {
  const data = "Sriman IT";
  return (
    <div>
      <ctx.Provider value={data}>
        <A />
      </ctx.Provider>
    </div>
  );
};

const A = () => {
  return <B />;
};
const B = () => {
  return <C />;
};
const C = () => {
  return <D />;
};

const D = () => {
  const data = useContext(ctx);
  return (
    <h1>
      I'm D Component::::<ctx.Consumer>{(data) => data}</ctx.Consumer>
      <h1>My data using useContext hook..{data}</h1>
    </h1>
  );
};
