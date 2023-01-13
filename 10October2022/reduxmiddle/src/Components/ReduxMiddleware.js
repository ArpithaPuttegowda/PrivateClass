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
  return (
    <div>
      <button onClick={handlePost}>Get post</button>
      <button onClick={handleComments}>Get comments</button>
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
