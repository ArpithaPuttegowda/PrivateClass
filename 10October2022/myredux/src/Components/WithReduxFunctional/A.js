import React, {useRef} from "react";
import store from "../../store/store";

export const A = () => {
  const nameRef = useRef(null);
  const handleName = () => {
    let name = nameRef.current.value;
    store.dispatch({
      type: "NAME_F",
      data: name
    });
  };
  return (
    <div>
      <input ref={nameRef} />
      <button onClick={handleName}>Name</button>
    </div>
  );
};

//component=>reducer=>redux
