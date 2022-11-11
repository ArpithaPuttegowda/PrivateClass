import React from "react";
import {useSelector} from "react-redux";

export const Home = () => {
  const state = useSelector((state) => state);
  console.log(state, "home");
  const data = state?.ajax?.data;
  return (
    <div>
      {data?.map((obj) => {
        return <h1>{obj?.body}</h1>;
      })}
    </div>
  );
};
