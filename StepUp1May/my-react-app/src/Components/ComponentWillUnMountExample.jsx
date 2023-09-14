import { useState } from "react";
import  { useEffect } from "react";

export const ComponentWillUnMountExample = () => {
    const [isChild,setIsChild]=useState(true)
    const handleToggle=()=>{
        setIsChild(!isChild)
    }
  return (
    <div>
        <button onClick={handleToggle}>Toggle</button>
        {
            isChild &&  <Child />
        }
    
    </div>
  );
}

const Child = () => {
  useEffect(() => {
 const id=setInterval(() => {
    }, 2000);
 return ()=>{
    //componentWillUnMount
    clearInterval(id)
 }
  }, []);

  return <div>I`m Child Component</div>;
}


