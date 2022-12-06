import React, {useEffect, useState} from "react";
import ParentComp from "./Components/HOC/ParentComp";

const ComponentWillUnmountUseEffect = () => {
  const [isChild, setIsChild] = useState(true);
  return (
    <div>
      {/* {isChild && <Child />}
      <button onClick={() => setIsChild(!isChild)}>Toggle</button> */}
      <ParentComp></ParentComp>
    </div>
  );
};

const Child = () => {
  let id;
  useEffect(() => {
    id = setInterval(() => console.log("StepUp"), 5000);
  }, []);
  useEffect(() => {
    return () => {
      alert("unmounting");
      clearInterval(id);
    };
  }, []);
  return <h1>I'm child component</h1>;
};

export default ComponentWillUnmountUseEffect;
