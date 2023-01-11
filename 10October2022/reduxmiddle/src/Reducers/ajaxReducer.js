import {initData} from "../Utils/init";
const ajaxReducer = (state = initData, action) => {
  if (action.type === "POST") {
    return (state = {...state, posts: action.payload});
  }
  return state;
};

export default ajaxReducer;
