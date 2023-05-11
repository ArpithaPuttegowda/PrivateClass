import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postAction} from "../Actions/PostAction";

const Ajax = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const data = state?.ajax?.data;
  useEffect(() => {
    postAction(dispatch);
  }, []);
  return (
    <div>
      {data?.map((obj, i) => {
        return <h1 key={obj?.userId}>{obj?.title}</h1>;
      })}
    </div>
  );
};
export default Ajax;
