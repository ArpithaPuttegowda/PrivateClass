import React from "react";
import {useDispatch} from "react-redux";
import postAction from "../actions/postAction";
import ServerCallService from "../Services/ServerCallService";

const ReduxMiddleware = () => {
  const dispatch = useDispatch();
  const getPost = () => {
    postAction(dispatch);
  };
  const getComments = () => {};
  const getUsers = () => {};
  return (
    <div>
      <button onClick={getPost}>Get Post</button>
      <button onClick={getComments}>Get Comments</button>
      <button onClick={getUsers}>Get Users</button>
    </div>
  );
};

export default ReduxMiddleware;
