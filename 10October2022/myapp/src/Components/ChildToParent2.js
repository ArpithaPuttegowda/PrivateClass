import React, {createRef, useRef} from "react";

export const Parent2 = () => {
  return (
    <div>
      <h1>Parent:::</h1>
      <Child2 />
    </div>
  );
};

const Child2 = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    let input = inputRef.current.value;
    alert(input);
  };
  return (
    <div>
      <h1>Child</h1>
      <input ref={inputRef} />
      <button onClick={handleClick}>Click me</button>
      <h1>Sachinkkk</h1>
    </div>
  );
};
