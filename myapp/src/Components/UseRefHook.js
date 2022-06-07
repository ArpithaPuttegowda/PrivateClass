import React, {forwardRef, useRef} from "react";

export const UseRefHook = () => {
  //   const myRef = React.createRef(null);
  const myRef = useRef(null);
  return (
    <div>
      UseRefHook
      <Child ref={myRef} name="Sachin" location="Mumbai" />
      <button
        onClick={() => {
          myRef.current.value = "Sachin";
        }}
      >
        Click
      </button>
    </div>
  );
};

const Child = forwardRef(({name, location}, r) => {
  return (
    <>
      <input ref={r} />
      <h1>
        {name}
        {location}
      </h1>
    </>
  );
});
