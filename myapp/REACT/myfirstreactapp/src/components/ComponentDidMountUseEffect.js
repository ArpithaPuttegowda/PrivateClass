import React, {useEffect, useState} from "react";

export const ComponentDidMountUseEffect = () => {
  const [count, setCount] = useState(0);
  //componentDidMount
  useEffect(() => {
    alert("called");
  }, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Inc{count}</button>
    </div>
  );
};
