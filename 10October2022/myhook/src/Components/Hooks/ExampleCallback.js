import React, {useState, memo, useCallback} from "react";

export const ExampleCallback = () => {
  alert("parent called");
  const [count, setCount] = useState(0);
  const fn = useCallback(() => {}, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Inc Count..{count}</button>
      <Child data={fn} />
    </div>
  );
};

const Child = memo(() => {
  alert("child called");
  return <div>Child</div>;
});
