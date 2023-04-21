import React from "react";
import {useCount} from "./useCount";

export const HoverWithCustom = () => {
  const [c, fn] = useCount(200);
  return (
    <div>
      <h1 onMouseOver={fn}>Hover me {c}</h1>
    </div>
  );
};
