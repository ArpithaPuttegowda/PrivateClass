import axios from "axios";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setData} from "./ajaxSlice";

export const AjaxReduxToolkit = () => {
  const dispatch = useDispatch();
  const [data, setD] = useState([]);
  const handleAjax = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setD(res.data);
        dispatch(setData(res.data));
      })
      .catch((failure) => console.log(failure));
  };
  return (
    <div>
      <button onClick={handleAjax}>Ajax</button>
      {data.map((obj, i) => {
        return <p>{obj.body}</p>;
      })}
    </div>
  );
};
