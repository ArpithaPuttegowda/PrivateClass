import {init} from "../Utils/init";
export const nameLocReducer = (state = init, action) => {
  if (action.type === "NAME") {
    state = {...state, name: action.payload};
  }
  if (action.type === "LOC") {
    state = {...state, loc: action.data};
  }
  if (action.type === "INPUT") {
    state = {...state, input: action.payload};
  }
  return state;
};
