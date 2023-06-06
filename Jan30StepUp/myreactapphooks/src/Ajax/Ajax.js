import React, { useEffect, useState } from "react";

export const Ajax = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setData(data?.slice(0, 5));
    })();
  }, []);
  return (
    <ul>
      {data?.map((v, i) => {
        return <li key={v.id}>{v?.title}</li>;
      })}
    </ul>
  );
};
