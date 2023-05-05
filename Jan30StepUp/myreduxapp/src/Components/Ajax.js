import axios from "axios";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

export const Ajax = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const data = state?.ajax?.data;
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        dispatch({
          type: "AJAX",
          payload: res?.data
        });
      })
      .catch((failure) => {});
  }, []);
  return (
    <div>
      {data?.map((obj, i) => {
        return <h1 key={obj?.userId}>{obj?.title}</h1>;
      })}
    </div>
  );
};
