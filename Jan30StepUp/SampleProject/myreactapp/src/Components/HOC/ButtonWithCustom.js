import React from "react";
import {useCount} from "./useCount";

export const ButtonWithCustom = () => {
  const [count, handleCount] = useCount(10);
  return (
    <div>
      <button onClick={handleCount}>Inc Count {count}</button>
    </div>
  );
};
