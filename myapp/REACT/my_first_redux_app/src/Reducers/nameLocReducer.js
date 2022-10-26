import {LOC} from "../constants";
import {initialState} from "../Utils/init";

const nameLocRed = (state = initialState, action) => {
  if (action.type === "NAME") {
    state = {...state, name: action.data};
  }
  if (action.type === LOC) {
    state = {...state, loc: action.payload};
  }
  console.log(state, "upated state");
  return state;
};
export default nameLocRed;
