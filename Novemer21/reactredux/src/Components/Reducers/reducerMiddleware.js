import {initMid} from "../Utils/init";

const middlewareRed = (state = initMid, action) => {
  switch (action.type) {
    case "POSTS":
      return (state = {...state, posts: action.res});
    default:
      return state;
  }
};

export default middlewareRed;
