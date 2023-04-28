import React, {memo, useCallback, useEffect, useState} from "react";

export const ExampleCallback = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  const getData = useCallback((state) => {
    console.log(state, "parent");
  }, []);
  return (
    <div>
      {alert("parent called")}
      <button onClick={handleCount}>Inc Count {count}</button>
      <Child getData={getData} />
    </div>
  );
};

const Child = memo(({getData}) => {
  const data = "Karnataka";
  useEffect(() => {
    getData(data);
  }, []);
  alert("Child called");
  return <div>Child</div>;
});
