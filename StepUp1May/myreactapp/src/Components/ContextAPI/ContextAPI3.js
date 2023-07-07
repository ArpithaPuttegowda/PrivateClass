import React, { createContext, useContext, useState } from "react";

const ctx = createContext();
const c = createContext();
export const ContextAPI3 = () => {
  const [count, setCount] = useState(0);
  const colors = ["red", "blue"];
  return (
    <div>
      <h1>I'm Parent</h1>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <c.Provider value={colors}>
        <ctx.Provider value={count}>
          <A />
          <B />
        </ctx.Provider>
      </c.Provider>
    </div>
  );
};

const A = () => {
  const colors = useContext(c);
  const data = useContext(ctx);
  console.log(data, "data", colors);
  return (
    <div>
      <h1 style={{ color: data < 10 ? "red" : "green" }}>I'm A:{data}</h1>
      {colors[0]}
    </div>
  );
};

const B = () => {
  const colors = useContext(c);
  return (
    <div>
      I'm B:
      <ctx.Consumer>{(data) => <h1>{data}</h1>}</ctx.Consumer>
      <h1 style={{ color: "blue" }}>{colors[1]}</h1>
      <C />
    </div>
  );
};

const C = () => {
  const d = useContext(ctx);
  return <div>I'm C:{d}</div>;
};
