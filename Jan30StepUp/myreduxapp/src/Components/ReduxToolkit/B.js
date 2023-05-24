import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setLoc } from "./nameLocSlice";

export const B = () => {
  const locRef = useRef(null);
  const dispatch = useDispatch();
  const handleLoc = () => {
    const loc = locRef?.current?.value;
    dispatch(setLoc(loc));
  };
  return (
    <div>
      <input ref={locRef} />
      <button onClick={handleLoc}>Loc</button>
    </div>
  );
};
