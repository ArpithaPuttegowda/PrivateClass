import {initData} from "../Utils/init";

const reducer = (state = initData, action) => {
  if (action.type === "NAME") {
    state = {
      ...state,
      name: action.payload
    };
  }
  return state;
};

export default reducer;
