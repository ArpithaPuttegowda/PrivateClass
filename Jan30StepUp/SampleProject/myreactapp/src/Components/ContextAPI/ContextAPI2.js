import React, {useContext} from "react";
import {ctxData, myCtx} from "./ctx";

export const ContextAPI2 = () => {
  const data = "PUNE";
  return (
    <div>
      I'm Parent:
      <ctxData.Provider value={data}>
        <A />
      </ctxData.Provider>
    </div>
  );
};

const A = () => {
  const myState = "Karnataka";
  return (
    <div>
      <myCtx.Provider value={myState}>
        <B />
      </myCtx.Provider>
    </div>
  );
};

const B = () => {
  return (
    <div>
      I'm B
      <C />
    </div>
  );
};

const C = () => {
  const data = useContext(ctxData);
  const state = useContext(myCtx);
  return (
    <div>
      I'm C:::{data}....mystate {state}
    </div>
  );
};
