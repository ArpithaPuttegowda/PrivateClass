import {initMid} from "../Utils/init";

const middlewareRed = (state = initMid, action) => {
  switch (action.type) {
    case "POSTS":
      return (state = {...state, posts: action.res});
    case "COMMENTS":
      return (state = {...state, comments: action.payload});
    default:
      return state;
  }
};

export default middlewareRed;
