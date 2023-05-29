import React, { useContext, useRef } from "react";
import { ctx } from "../ctx";

export const A = () => {
  const myData = useContext(ctx);
  const nameRef = useRef(null);
  const handleName = () => {
    myData.dispatch({
      type: "NAME",
      payload: nameRef?.current?.value,
    });
    nameRef.current.value = "";
  };
  return (
    <div>
      <input ref={nameRef} />
      <button onClick={handleName}>Name</button>
    </div>
  );
};
