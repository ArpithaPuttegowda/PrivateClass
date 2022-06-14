import {initData} from "../Utils/init";

const reducer2 = (state = initData, action) => {
  if (action.type === "LOC") {
    state = {...state, loc: action.data};
  }
  return state;
};
export default reducer2;
