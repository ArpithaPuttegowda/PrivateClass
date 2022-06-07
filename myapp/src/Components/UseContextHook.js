import React, {createContext, useContext} from "react";

const ctx = createContext();
export const UseContextHook = () => {
  const data = "Sachin";
  return (
    <div>
      <ctx.Provider value={data}>
        <A />
      </ctx.Provider>
    </div>
  );
};
export const A = () => {
  return (
    <>
      <B />
    </>
  );
};
export const B = () => {
  const data = useContext(ctx);
  return (
    <>
      {data}...It'sB
      <p>
        <C />
      </p>
    </>
  );
};
export const C = () => {
  const data = useContext(ctx);
  return <>I'm C::::{data}</>;
};
