import React, {useContext} from "react";
import {ctx, myCtx} from "./ctx";

export const ContextAPI3 = () => {
  const name = "Sachin";
  const loc = "Mumbai";
  const arr = ["rose", "lilly", "jasmin"];
  return (
    <div>
      I'm Parent:
      <myCtx.Provider value={arr}>
        <ctx.Provider value={{name, loc}}>
          <A />
        </ctx.Provider>
      </myCtx.Provider>
    </div>
  );
};

const A = () => {
  return (
    <div>
      I'm A:
      <B />
    </div>
  );
};

const B = () => {
  //   const data = useContext(myCtx);
  const [a, b, c] = useContext(myCtx);
  return (
    <div>
      {/* I'm B:...{data[0]}..{data[1]}...{data[2]} */}
      I'm B ...{a}...{b}...{c}
      <C />
    </div>
  );
};

const C = () => {
  const {name, loc} = useContext(ctx);
  return (
    <div>
      I'm C::{name}..{loc}
    </div>
  );
};
