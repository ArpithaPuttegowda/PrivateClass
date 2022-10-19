import React, {useRef} from "react";

export const A = ({f1}) => {
  const nameRef = useRef();
  const handleName = () => {
    const name = nameRef.current.value;
    f1(name);
  };
  return (
    <div>
      <input ref={nameRef} />
      <button onClick={handleName}>Name</button>
    </div>
  );
};
