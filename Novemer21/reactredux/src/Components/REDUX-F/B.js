import React, {useRef} from "react";
import {useDispatch} from "react-redux";

export const B = () => {
  const dispatch = useDispatch();
  const locRef = useRef(null);
  const handleLoc = () => {
    let loc = locRef.current.value;
    dispatch({
      type: "LOC",
      data: loc
    });
  };
  return (
    <div>
      <input ref={locRef} />
      <button onClick={handleLoc}>Loc</button>
    </div>
  );
};
