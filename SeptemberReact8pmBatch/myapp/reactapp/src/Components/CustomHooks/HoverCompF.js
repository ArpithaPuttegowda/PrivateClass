import React, {useState} from "react";
import {useCount} from "./useCount";

export const HoverCompF = () => {
  const [mouseHover, setMouseHover] = useState(false);
  const [ct, fn] = useCount();
  return (
    <div>
      <h1 onMouseOver={fn}>Hover me{ct}</h1>
      <h1
        style={{color: mouseHover ? "red" : "green"}}
        onMouseOver={() => setMouseHover(!mouseHover)}
      >
        Hover me to change the color
      </h1>
    </div>
  );
};
