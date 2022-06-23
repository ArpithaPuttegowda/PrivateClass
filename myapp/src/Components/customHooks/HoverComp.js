import React from "react";
import useInc from "./incCount";

export const HoverComp = () => {
  const [a, b] = useInc(0);
  return (
    <div>
      <h1 onMouseOver={() => b()}>HoverOnMe{a}</h1>
    </div>
  );
};
