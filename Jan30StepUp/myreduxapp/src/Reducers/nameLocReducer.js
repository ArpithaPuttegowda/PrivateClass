import {initData} from "../Utils/init";

const nameLocReducer = (state = initData, action) => {
  if (action.type === "NAME") {
    state = {...state, name: action.payload};
  }
  return state;
};

export default nameLocReducer;
