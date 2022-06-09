import React, {memo, useState} from "react";

export const MemoReact = () => {
  const [count, setCount] = useState(0);
  alert("ParentCalled");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <h1>{count}</h1>
      <Child />
    </div>
  );
};

const Child = memo(() => {
  alert("ChildCalled");
  return <div>I'm Child component</div>;
});
