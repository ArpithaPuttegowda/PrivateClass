import React, {useRef} from "react";
import store from "../../store/store";

export const A = () => {
  const nameRef = useRef(null);
  const handleName = () => {
    const name = nameRef.current.value;
    store.dispatch({
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
