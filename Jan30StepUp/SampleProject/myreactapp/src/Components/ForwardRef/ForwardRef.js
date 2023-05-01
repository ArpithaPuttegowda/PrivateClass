// import React, {useRef} from "react";

// export const MyParent = () => {
//   const inputRef = useRef(null);
//   const handleClick = () => {
//     inputRef.current.value = "sachin";
//   };
//   return (
//     <div>
//       <Child myRef={inputRef} />
//       <button onClick={handleClick}>Click</button>
//     </div>
//   );
// };

// const Child = ({myRef}) => {
//   return (
//     <>
//       <input ref={myRef} />
//     </>
//   );
// };

import React, {forwardRef, useRef} from "react";

export const MyParent = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.value = "sachin";
  };
  return (
    <div>
      <Child ref={inputRef} name="sachin" loc="mumbai" />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

const Child = forwardRef(({name, loc}, r) => {
  return (
    <>
      <input ref={r} />
    </>
  );
});

// Child = forwardRef(Child);
