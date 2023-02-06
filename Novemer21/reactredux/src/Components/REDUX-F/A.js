import React, {useRef} from "react";
import {useDispatch} from "react-redux";

export const A = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const handleName = () => {
    let name = inputRef.current.value;
    dispatch({
      type: "NAME",
      payload: name
    });
  };
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleName}>Name</button>
    </div>
  );
};
