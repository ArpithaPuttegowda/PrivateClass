import React, { useEffect, useState } from "react";

export const GetData = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await res.json();
      setComments(data?.slice(0, 5));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setComments(data?.slice(0, 5));
    })();
  }, []);
  return (
    <div>
      {comments?.map((obj) => {
        return <h1 key={obj?.name}>{obj?.name}</h1>;
      })}
    </div>
  );
};
