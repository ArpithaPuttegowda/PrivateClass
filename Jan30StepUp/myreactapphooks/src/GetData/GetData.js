import React, { useEffect, useState } from "react";

export const GetData = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data?.slice(0, 10)));
  }, []);
  return (
    <div>
      {comments?.map((obj) => {
        return <h1 key={obj?.name}>{obj?.name}</h1>;
      })}
    </div>
  );
};
