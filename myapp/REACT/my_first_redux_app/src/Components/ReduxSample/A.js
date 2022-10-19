import React, {useRef} from "react";

export const A = () => {
  const nameRef = useRef();
  const handleName = () => {
    const name = nameRef.current.value;
  };
  return (
    <div>
      <input ref={nameRef} />
      <button onClick={handleName}>Name</button>
    </div>
  );
};
