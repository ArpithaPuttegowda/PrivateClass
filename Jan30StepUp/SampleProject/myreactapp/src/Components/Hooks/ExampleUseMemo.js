import React, {useState, useMemo} from "react";

export const ExampleUseMemo = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  const delay = useMemo(() => {
    for (let i = 0; i <= 10000000000; i++) {}
    return 10;
  }, []);

  return (
    <div>
      <div>{delay}</div>
      <button onClick={handleCount}>Inc Count {count}</button>
    </div>
  );
};
