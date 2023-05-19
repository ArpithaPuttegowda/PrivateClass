import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { postAction } from "../Actions/PostAction";
import myThunkAction from "../Actions/thunkAction";

const Ajax = ({ thunkAction }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const data = state?.ajax?.data;
  useEffect(() => {
    postAction(dispatch);
  }, []);
  const handleComments = () => {
    thunkAction();
  };

  const handlePhotos = () => {
    dispatch({
      type: "PHOTOS_SAGA",
    });
  };

  const handleTodos = () => {
    dispatch({
      type: "TODO_SAGA",
    });
  };
  return (
    <div>
      <p>
        <button onClick={handleComments}>Comments</button>
      </p>
      <p>
        <button onClick={handlePhotos}>Photos</button>
      </p>
      <p>
        <button onClick={handleTodos}>ToDos</button>
      </p>
      {/* {data?.map((obj, i) => {
        return <h1 key={obj?.userId}>{obj?.title}</h1>;
      })} */}
    </div>
  );
};

const mdp = {
  thunkAction: myThunkAction,
};
export default connect(null, mdp)(Ajax);
