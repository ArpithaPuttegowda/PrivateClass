import React, {useRef} from "react";
import myStore from "../../Store/store";

export const A = () => {
  const nameRef = useRef();
  const handleName = () => {
    const name = nameRef.current.value;
    nameRef.current.value = "";
    myStore.dispatch({
      type: "NAME",
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
