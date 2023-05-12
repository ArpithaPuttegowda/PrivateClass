import React, {useEffect} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {postAction} from "../Actions/PostAction";
import myThunkAction from "../Actions/thunkAction";

const Ajax = ({thunkAction}) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const data = state?.ajax?.data;
  useEffect(() => {
    postAction(dispatch);
  }, []);
  const handleComments = () => {
    thunkAction();
  };
  return (
    <div>
      <button onClick={handleComments}>Comments</button>
      {/* {data?.map((obj, i) => {
        return <h1 key={obj?.userId}>{obj?.title}</h1>;
      })} */}
    </div>
  );
};

const mdp = {
  thunkAction: myThunkAction
};
export default connect(null, mdp)(Ajax);
