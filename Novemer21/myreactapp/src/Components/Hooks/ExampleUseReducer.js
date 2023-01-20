import React, {useReducer, useState} from "react";

const initialData = {
  count: 0,
  n: 1
};
const reducer = (state = initialData, action) => {
  if (action === "INC_COUNT") {
    state = {...state, count: state.count + 1};
  }
  if (action === "DEC_COUNT") {
    state = {...state, count: state.count - 1};
  }
  if (action === "RESET") {
    state = {...state, count: 0};
  }
  return state;
};
export const ExampleUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialData);
  console.log(state, "state");
  const handleInc = () => {
    dispatch("INC_COUNT");
  };
  const handleDec = () => {
    dispatch("DEC_COUNT");
  };
  const handleReset = () => {
    dispatch("RESET");
  };
  return (
    <div>
      <button onClick={handleInc}>Inc Count</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleDec}>Dec Count</button>
      <h1>Count:{state.count}</h1>
    </div>
  );
};
