import React, {useEffect, useState} from "react";

export const Moutingphase = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
    console.log("componentDidMount");
  }, []);
  return (
    <div>
      {data.map((obj) => {
        return <h1>{obj.title}</h1>;
      })}
    </div>
  );
};
//useEffect with callback and empty array dep wil componentDidMount
//useEffect(()=>{},[])

//useEffect(()=>{}) =>componentDidUpdate

//useEffect(()=>{return ()=>{}},[]) // componentwillUnmount
