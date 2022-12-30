import {initData} from "../utils/init";
import {LOC, NAME} from "../withRedux/constants";

export const myReducer = (state = initData, action) => {
  debugger;
  if (action.type === NAME) {
    state = {...state, name: action.payload};
  }
  if (action.type === LOC) {
    state = {...state, loc: action.payload};
  }
  console.log(state, "updated state");
  return state;
};
