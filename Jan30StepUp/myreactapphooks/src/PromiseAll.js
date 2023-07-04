import React from "react";
import { useEffect } from "react";

export const PromiseAll = () => {
  function fetchData(url) {
    return fetch(url)
      .then((response) => response.json())
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data, "post");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // fetch("https://jsonplaceholder.typicode.com/comments")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data, "comments");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // fetch("https://jsonplaceholde.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data, "users");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    const request1 = fetchData("https://jsonplaceholder.typicode.com/posts");
    const request2 = fetchData("https://jsonplaceholder.typicode.com/comments");
    const request3 = fetchData("https://jsonplaceholder.typicode.com/users");
    Promise.all([request1, request2, request3])
      .then((data) => {
        console.log(data, "data");
      })
      .catch((failur) => console.log(failur));
  }, []);
  return <div>PromiseAll</div>;
};
