import React, {useEffect, useState} from "react";

export const ListAndKeysTable = () => {
  const [comments, setComments] = useState([]);
  const keys = ["postId", "id", "name", "email"];
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <>
      <table
        border="1px solid 
      "
      >
        <thead>
          <th>PostId</th>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </thead>
        <tbody>
          {comments?.slice(0, 5)?.map((obj) => {
            return (
              <tr>
                {keys.map((key) => {
                  return <td>{obj[key]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
