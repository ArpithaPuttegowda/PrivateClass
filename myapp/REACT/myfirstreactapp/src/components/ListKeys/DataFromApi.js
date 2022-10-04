import React, {useEffect, useState} from "react";

export const DataFromApi = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      {posts.map((post) => {
        return <h1>{post.title}</h1>;
      })}
    </div>
  );
};
