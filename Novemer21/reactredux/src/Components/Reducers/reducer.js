import {init} from "../Utils/init";
export const nameLocReducer = (state = init, action) => {
  if (action.type === "NAME") {
    state = {...state, name: action.payload};
  }
  if (action.type === "LOC") {
    state = {...state, loc: action.data};
  }
  return state;
};
