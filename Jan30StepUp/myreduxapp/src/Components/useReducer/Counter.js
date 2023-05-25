import React, { useState, useReducer } from "react";

// export const Counter = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Inc</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//       <button onClick={() => setCount(count - 1)}>Dec</button>
//       <h1>{count}</h1>
//     </div>
//   );
// };
const initState = {
  count: 0,
};
const reducer = (state, action) => {
  if (action === "INC") {
    state = { ...state, count: state.count + 1 };
  }
  if (action === "DEC") {
    state = { ...state, count: state.count - 1 };
  }
  if (action === "RESET") {
    state = { ...state, count: 0 };
  }

  return state;
};
export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state, "myState");
  const handleInc = () => {
    dispatch("INC");
  };
  const handleDec = () => {
    dispatch("DEC");
  };
  const handleReset = () => {
    dispatch("RESET");
  };
  return (
    <div>
      <button onClick={handleInc}>Inc</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDec}>Dec</button>
      <h1>{state.count}</h1>
    </div>
  );
};
