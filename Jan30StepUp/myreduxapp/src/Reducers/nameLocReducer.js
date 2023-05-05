import {initData} from "../Utils/init";

const nameLocReducer = (state = initData, action) => {
  if (action.type === "NAME") {
    state = {...state, name: action.payload};
  }
  if (action.type === "LOC") {
    state = {...state, loc: action.payload};
  }
  return state;
};

export default nameLocReducer;
