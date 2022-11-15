import React, {useReducer} from "react";

const initialState = {
  count: 0
};

const reducer = (state, action) => {
  if (action === "INC_COUNT") {
    state = {...state, count: state.count + 1};
  }
  console.log(state, "state");
  return state;
};

export const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleInc = () => {
    dispatch("INC_COUNT");
  };
  return (
    <div>
      <button onClick={handleInc}>Click me</button>
      <h1>{state.count}</h1>
    </div>
  );
};
