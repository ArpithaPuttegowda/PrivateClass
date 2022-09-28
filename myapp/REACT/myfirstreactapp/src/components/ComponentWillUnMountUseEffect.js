import React, {useEffect, useState} from "react";

export const ComponentWillUnMountUseEffect = () => {
  const [isChild, setIsChild] = useState(true);
  return (
    <div>
      <button onClick={() => setIsChild(!isChild)}>Toggle</button>
      {isChild && <Child />}
    </div>
  );
};

const Child = () => {
  let id;

  useEffect(() => {
    id = setInterval(() => {
      console.log("SetInterval called");
    }, 5000);
  }, []);

  useEffect(() => {
    return () => {
      alert("component is Unmounting");
      clearInterval(id);
    };
  }, []);
  return <div>I'm Child</div>;
};
