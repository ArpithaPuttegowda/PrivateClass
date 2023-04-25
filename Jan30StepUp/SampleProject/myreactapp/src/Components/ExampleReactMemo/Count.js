import React, {useState, memo} from "react";

export const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {alert("parent called")}
      <button onClick={() => setCount(count + 1)}>Inc Count {count}</button>
      <Child />
      <Example />
    </div>
  );
};

let Child = memo(() => {
  alert("child called");
  return <div>I'm Child</div>;
});

// Child = memo(Child);
const Example = memo(() => {
  alert("example called");
  return <div>I'm Example</div>;
});
