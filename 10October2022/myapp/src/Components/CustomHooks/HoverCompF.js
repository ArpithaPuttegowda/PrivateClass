import React from "react";
import {useCount} from "./useCount";

export const HoverCompF = () => {
  const [count, fn] = useCount(200);
  return (
    <div>
      <h1 onMouseOver={fn}>Hover me{count}</h1>
    </div>
  );
};
