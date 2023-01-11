import React from "react";
import {useDispatch} from "react-redux";
import {postAction} from "../Actions/postAction";

export const ReduxMiddleware = () => {
  const dispatch = useDispatch();
  const handlePost = () => {
    postAction(dispatch);
  };
  const handleComments = () => {};
  return (
    <div>
      <button onClick={handlePost}>Get post</button>
      <button onClick={handleComments}>Get comments</button>
    </div>
  );
};
