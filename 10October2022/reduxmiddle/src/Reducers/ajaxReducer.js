import {initData} from "../Utils/init";
const ajaxReducer = (state = initData, action) => {
  if (action.type === "POST") {
    return (state = {...state, posts: action.payload});
  }
  if (action.type === "COMMENTS") {
    return (state = {...state, comments: action.payload});
  }
  return state;
};

export default ajaxReducer;
