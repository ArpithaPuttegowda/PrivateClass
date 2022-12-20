import React, {useRef} from "react";

export const A = () => {
  const nameRef = useRef(null);
  const handleName = () => {
    let name = nameRef.current.value;
    alert(name);
  };
  return (
    <div>
      <input ref={nameRef} />
      <button onClick={handleName}>Name</button>
    </div>
  );
};
