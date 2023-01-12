import axios from "axios";
import React from "react";
import {useDispatch} from "react-redux";
import {postAction} from "../Actions/postAction";

export const ReduxMiddleware = () => {
  const dispatch = useDispatch();
  const handlePost = () => {
    postAction(dispatch);
  };
  const handleComments = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        dispatch({
          type: "COMMENTS",
          payload: res.data
        });
      })
      .catch((res) => {
        console.log(res, "failure");
      });
  };
  return (
    <div>
      <button onClick={handlePost}>Get post</button>
      <button onClick={handleComments}>Get comments</button>
    </div>
  );
};
