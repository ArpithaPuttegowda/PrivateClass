import axios from "axios";
import React from "react";
import {ServerCallService} from "../../ServerCallService/ServerCallService";

export const ReduxMiddlewares = () => {
  const handlePosts = () => {
    ServerCallService.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
      })
      .catch((res) => {
        console.log(res);
      });
  };
  const handlePhotos = () => {
    ServerCallService.get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        console.log(res.data);
      })
      .catch((res) => {
        console.log(res);
      });
  };
  const handleUsers = () => {
    ServerCallService.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      <button onClick={handlePosts}>Get Posts</button>
      <button onClick={handlePhotos}>Get Photos</button>
      <button onClick={handleUsers}>Get Users</button>
      <button>Get Comments</button>
    </div>
  );
};
