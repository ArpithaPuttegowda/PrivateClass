import React, { useContext, useRef } from "react";
import { ctx } from "../ctx";

export const B = () => {
  const myData = useContext(ctx);
  const locRef = useRef(null);
  const handleLoc = () => {
    myData.dispatch({
      type: "LOC",
      payload: locRef?.current?.value,
    });
  };
  return (
    <div>
      <input ref={locRef} />
      <button onClick={handleLoc}>Loc</button>
    </div>
  );
};
