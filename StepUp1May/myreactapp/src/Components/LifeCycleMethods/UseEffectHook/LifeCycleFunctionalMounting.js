import React, { useEffect, useState } from "react";

export const LifeCycleFunctionalMounting = () => {
  const [data, setData] = useState([]);

  //componentDidMount
  useEffect(() => {
    handleClick();
  }, []);

  const handleClick = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      {data?.map((obj) => {
        return <h1>{obj.title}</h1>;
      })}
    </div>
  );
};
