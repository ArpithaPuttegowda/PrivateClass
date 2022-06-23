import React from "react";
import useInc from "./incCount";

export const ButtonComp = () => {
  const [count, handleMethod] = useInc(0);
  return (
    <div>
      <button onClick={() => handleMethod()}>IncCount{count}</button>
    </div>
  );
};
