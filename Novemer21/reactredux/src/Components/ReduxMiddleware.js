import React from "react";
import {connect, useDispatch} from "react-redux";
import postAction from "../actions/postAction";
import thunkAction from "../actions/thunkAction";
import ServerCallService from "../Services/ServerCallService";

const ReduxMiddleware = ({myThunkAction}) => {
  const dispatch = useDispatch();
  const getPost = () => {
    postAction(dispatch);
  };
  const getComments = () => {
    myThunkAction();
  };
  const getUsers = () => {};
  return (
    <div>
      <button onClick={getPost}>Get Post</button>
      <button onClick={getComments}>Get Comments</button>
      <button onClick={getUsers}>Get Users</button>
    </div>
  );
};
const mdp = {
  myThunkAction: thunkAction
};

export default connect(null, mdp)(ReduxMiddleware);
