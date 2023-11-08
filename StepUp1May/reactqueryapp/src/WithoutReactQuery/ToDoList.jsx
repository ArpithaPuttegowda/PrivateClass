import React, { useEffect, useState } from "react";

export const ToDoList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        if (data) {
          setIsLoading(false);
          setData(data);
        }
      } catch (e) {
        console.log(e);
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchPosts();
  }, []);
  return (
    <>
      <div>{isLoading && <h1>loading....</h1>}</div>
      {data?.length ? (
        <ol>
          {data.map((obj, i) => {
            return <li key={obj.id}>{obj.title}</li>;
          })}
        </ol>
      ) : (
        ""
      )}
      {isError && <h1>Something went wrong</h1>}
    </>
  );
};
