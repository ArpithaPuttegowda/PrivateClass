import React from "react";
import {useDispatch} from "react-redux";
import {postAction} from "../Actions/action";

export const ReduxMiddlewares = () => {
  const dispatch = useDispatch();
  const handlePosts = () => {
    postAction(dispatch);
  };
  const handlePhotos = () => {};
  const handleUsers = () => {};
  const handleComments = () => {};
  return (
    <div>
      <button onClick={handlePosts}>Get Posts</button>
      <button onClick={handlePhotos}>Get Photos</button>
      <button onClick={handleUsers}>Get Users</button>
      <button onClick={handleComments}>Get Comments</button>
    </div>
  );
};
