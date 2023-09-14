import { useEffect, useState } from "react";

export const MyAjax = () => {
    const [data,setData]=useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data)
      })
      .catch((e) => {
      });
  }, []);
  return <div>{
    data?.map((obj)=>{
        return <p key={obj.id}>{obj.title}</p>
    })}</div>;
};
