import React, {useRef} from "react";

export const A = ({getName}) => {
  const nameRef = useRef(null);
  const handleName = () => {
    let name = nameRef?.current?.value;
    getName(name);
  };
  return (
    <p>
      <input ref={nameRef} />
      <button onClick={handleName}>Name</button>
    </p>
  );
};
