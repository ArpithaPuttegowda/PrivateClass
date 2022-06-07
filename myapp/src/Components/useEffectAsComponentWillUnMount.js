import React, {useEffect, useState} from "react";

export const UseEffectAsComponentWillUnMount = () => {
  const [isChild, setIsChild] = useState(true);
  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => setIsChild(!isChild)}>Toggle</button>
      {isChild && <Child />}
    </div>
  );
};

const Child = () => {
  let myRef;
  useEffect(() => {
    myRef = setInterval(() => {
      console.log("setTimeout triggered");
    }, 5000);
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(myRef);
      alert("componentWillUnmount");
    };
  });
  return <>I'm Child Component</>;
};
