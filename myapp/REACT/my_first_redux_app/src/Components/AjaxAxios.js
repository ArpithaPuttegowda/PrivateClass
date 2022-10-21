import axios from "axios";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

export const AjaxAxios = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state, "posts");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        dispatch({
          type: "POSTS",
          payload: res.data
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      {state?.postRed?.posts?.slice(0, 2).map((obj) => {
        return <h1>{obj.body}</h1>;
      })}
    </div>
  );
};
