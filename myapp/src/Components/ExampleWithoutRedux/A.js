import React, {useRef} from "react";

export const A = ({a}) => {
  const nameRef = useRef(null);
  const handleName = () => {
    let name = nameRef.current.value;
    a(name);
  };
  return (
    <div>
      <input ref={nameRef} />
      <button onClick={handleName}>Name</button>
    </div>
  );
};
