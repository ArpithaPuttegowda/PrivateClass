import React from "react";
import {useCount} from "./useCount";

export const ButtonCompF = () => {
  const [a, b] = useCount();
  return (
    <div>
      <button onClick={b}>Click me{a}</button>
    </div>
  );
};
