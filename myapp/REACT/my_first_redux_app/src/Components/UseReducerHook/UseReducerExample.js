import React, {useReducer} from "react";

const initialState = {
  count: 0,
  name: "Sachin"
};

const reducer = (state, action) => {
  if (action === "INC_COUNT") {
    state = {...state, count: state.count + 1};
  }
  if (action === "DEC_COUNT") {
    state = {...state, count: state.count - 1};
  }
  if (action.type === "Change_Name") {
    state = {...state, name: action.payload};
  }
  console.log(state, "state");
  return state;
};

export const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const changeName = "Dhoni";
  const handleInc = () => {
    dispatch("INC_COUNT");
  };
  const handleDec = () => {
    dispatch("DEC_COUNT");
  };
  return (
    <div>
      <button onClick={handleInc}>Inc Count</button>
      <button onClick={handleDec}>Dec Count</button>
      <button
        onClick={() => {
          dispatch({
            type: "Change_Name",
            payload: changeName
          });
        }}
      >
        Change Name
      </button>
      <h1>{state.count}</h1>
      <h1>{state.name}</h1>
    </div>
  );
};
