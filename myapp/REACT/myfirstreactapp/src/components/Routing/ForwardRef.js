// import React, {useRef} from "react";

// export const Parent = () => {
//   let inputRef = useRef(null);
//   const handleClick = () => {
//     inputRef.current.value = "Sachin";
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
//     <div>
//       <input ref={myRef} />
//     </div>
//   );
// };

import React, {forwardRef, useRef} from "react";

export const Parent = () => {
  let inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.value = "Sachinnn";
  };
  return (
    <div>
      <Child ref={inputRef} name="DHONI" />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

let Child = (props, f) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <input ref={f} />
    </div>
  );
};

Child = forwardRef(Child);
