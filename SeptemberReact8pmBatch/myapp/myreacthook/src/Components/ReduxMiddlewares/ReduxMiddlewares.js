import React from "react";
import {useDispatch} from "react-redux";
import {postAction} from "../Actions/action";
import {thunkAction} from "../Actions/thunkAction";
import {connect} from "react-redux";

const ReduxMiddlewares = ({t}) => {
  const dispatch = useDispatch();
  const handlePosts = () => {
    postAction(dispatch);
  };
  const handlePhotos = () => {
    t();
  };
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

const mdp = {
  t: thunkAction
};

export default connect(null, mdp)(ReduxMiddlewares);
