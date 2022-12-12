import React, {useMemo, useState} from "react";

export const ExampleUseMemo = () => {
  const [count, setCount] = useState(0);
  const delay = useMemo(() => {
    for (let i = 0; i <= 5000000000; i++) {}
    return 10;
  }, []);
  return (
    <div>
      <p>{delay}</p>
      <button onClick={() => setCount(count + 1)}>Inc Count{count}</button>
    </div>
  );
};
