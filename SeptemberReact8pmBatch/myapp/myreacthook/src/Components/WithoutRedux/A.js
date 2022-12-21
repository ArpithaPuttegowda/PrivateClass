import React, {useRef} from "react";

export const A = ({fn}) => {
  const nameRef = useRef(null);
  const handleName = () => {
    let name = nameRef.current.value;
    fn(name);
  };
  return (
    <div>
      <input ref={nameRef} />
      <button onClick={handleName}>Name</button>
    </div>
  );
};
