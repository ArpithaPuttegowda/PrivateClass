import React, {forwardRef, useRef} from "react";

export const ForwardRef2 = () => {
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const handleClick = () => {
    myRef1.current.value = "Sachin";
    myRef2.current.value = "mumbai";
  };
  return (
    <p>
      <Child ref={{myRef1, myRef2}} />
      <button onClick={handleClick}>Click me</button>
    </p>
  );
};

const Child = forwardRef((props, {myRef1, myRef2}) => {
  return (
    <div>
      Name: <input ref={myRef1} />
      Loc: <input ref={myRef2} />
    </div>
  );
});
