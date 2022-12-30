import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {NAME} from "./constants";

export const A = () => {
  const dispatch = useDispatch();
  const nameRef = useRef(null);
  const handleName = () => {
    let name = nameRef.current.value;
    dispatch({
      type: NAME,
      payload: name
    });
  };
  return (
    <div>
      <input ref={nameRef} />
      <button onClick={handleName}>Name</button>
    </div>
  );
};
