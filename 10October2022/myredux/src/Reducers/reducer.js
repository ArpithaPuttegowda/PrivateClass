import {init} from "../Utils/init";
const nameLocReducer = (state = init, action) => {
  if (action.type === "NAME") {
    state = {...state, name: action.data};
  }
  if (action.type === "LOC") {
    state = {...state, loc: action.loc};
  }
  return state;
};

export default nameLocReducer;
