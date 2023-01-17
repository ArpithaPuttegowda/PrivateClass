import React from "react";
import {connect, useDispatch} from "react-redux";
import {postAction} from "../Actions/postAction";
import thunkAction from "../Actions/thunkAction";

const ReduxMiddleware = ({t}) => {
  const dispatch = useDispatch();
  const handlePost = () => {
    postAction(dispatch);
  };
  const handleComments = () => {
    t();
  };
  const handleUsers = () => {
    dispatch({
      type: "USER_1"
    });
  };
  return (
    <div>
      <button onClick={handlePost}>Get post</button>
      <button onClick={handleComments}>Get comments</button>
      <button onClick={handleUsers}>Get Users</button>
      <button>Get Photos</button>
      <button>Get Photos</button>
    </div>
  );
};

// const mdp=(d)=>{
//   return {
//     dis:d
//   }
// }
const mdp = {
  t: thunkAction
};

export default connect(null, mdp)(ReduxMiddleware);
