import React, {useContext, useRef} from "react";
import {ctx} from "../../App";

export const A = () => {
  const nameRef = useRef(null);
  const data = useContext(ctx);
  console.log(data, "data context");
  const handleName = () => {
    let name = nameRef.current.value;
    data.dispatch({
      type: "NAME",
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
