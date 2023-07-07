import React, { createContext, useContext, useState } from "react";

const ctx = createContext();
export const ContextAPI2 = () => {
  const [count, setCount] = useState(0);
  const myLoc = "Hyderabad";
  return (
    <div>
      <h1>I'm Parent</h1>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <ctx.Provider value={{ c: count, loc: myLoc, runs: 12 }}>
        <A />
        <B />
      </ctx.Provider>
    </div>
  );
};

const A = () => {
  const data = useContext(ctx);
  console.log(data, "data");
  return <div>I'm A:{data.c}</div>;
};

const B = () => {
  return (
    <div>
      I'm B:
      <ctx.Consumer>{(data) => <h1>{data.c}</h1>}</ctx.Consumer>
      <C />
    </div>
  );
};

const C = () => {
  const d = useContext(ctx);
  return (
    <div>
      I'm C:{d.c}...{d.loc}
    </div>
  );
};
