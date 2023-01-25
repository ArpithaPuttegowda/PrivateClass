import React, {useMemo, useState} from "react";

export const ExampleUseMemo = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  const delay = useMemo(() => {
    for (let i = 0; i <= 5000000000; i++) {}
    return 10;
  }, []);
  return (
    <div>
      <h1>{delay}</h1>
      <button onClick={handleCount}>Inc Count</button>
      <h1>{count}</h1>
    </div>
  );
};
