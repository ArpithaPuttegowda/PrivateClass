import React, {forwardRef, useRef} from "react";

export const ExampleForwardRef = () => {
  const nameRef = useRef(null);
  const handleName = () => {
    nameRef.current.value = "sachin";
  };
  return (
    <div>
      <button onClick={handleName}>Update Name</button>
      <Child ref={nameRef} loc="mumbai" />
    </div>
  );
};

const Child = forwardRef(({loc}, r) => {
  return (
    <div>
      <h1>I'm Child..{loc}</h1>
      <input ref={r} />
    </div>
  );
});
