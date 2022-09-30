import React, {useState, memo} from "react";

export const FunctionalComponentReactMemo = () => {
  alert("parent calld");
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Inc Count...{count}</button>
      <Child />
    </div>
  );
};

let Child = memo(() => {
  alert("child called");
  return <div>I'm Child</div>;
});

// Child = memo(Child);
