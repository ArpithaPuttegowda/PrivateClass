import React, {useContext} from "react";
import {ctx, myClrCtx} from "./ctx";

export const WithContext2 = () => {
  const data = {
    name: "Sachin",
    loc: "mumbai"
  };
  const myColor = ["red", "blue", "yellow"];
  return (
    <div>
      <ctx.Provider value={data}>
        <myClrCtx.Provider value={myColor}>
          <A />
        </myClrCtx.Provider>
      </ctx.Provider>
    </div>
  );
};

const A = () => {
  const myData = useContext(ctx);
  const myColors = useContext(myClrCtx);
  return (
    <div>
      I'm A:::{myData.name}...{myData.loc}
      myColor:::{myColors[0]}
      <B />
      <C />
    </div>
  );
};

const B = () => {
  const myData = useContext(ctx);
  return (
    <div>
      I'm B:::
      {myData.name}...{myData.loc}
    </div>
  );
};

const C = () => {
  const myData = useContext(ctx);
  const myColors = useContext(myClrCtx);
  return (
    <div>
      I'm C:::
      {myData.name}...{myData.loc}
      Color::{myColors[1]}
    </div>
  );
};
