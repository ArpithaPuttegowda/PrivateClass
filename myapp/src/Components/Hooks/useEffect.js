import React, {useEffect, useState} from "react";

export const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  //componentDidMount
  useEffect(() => {
    console.log("componentDidMOunt");
  }, []);
  useEffect(() => {
    console.log("componentDidUpdate count");
  }, [count]);

  useEffect(() => {
    console.log("componentDidUpdate name");
  }, [name]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setName(name + "a")}>UpdateName</button>
    </div>
  );
};

//useEffect hook is going to handle cycle methods
//useEffect(()=>{})-> componentDidUpdate / useEffect(()=>{},[count,name])
//useEffect(()=>{},[])->componentDidMount
//useEffect(()=>{return ()=>{}})->componentWillUnmount
