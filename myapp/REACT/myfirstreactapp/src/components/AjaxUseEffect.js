import React, {useEffect, useState} from "react";

export const AjaxUseEffect = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      {data?.map((obj) => {
        return <h1>{obj.title}</h1>;
      })}
    </div>
  );
};
