import React, {useMemo, useState} from "react";

export const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const delay = useMemo(() => {
    for (let i = 0; i <= 1000000000; i++) {}
    return 10;
  }, []);
  return (
    <div>
      <h1>{delay}</h1>
      <button onClick={() => setCount(count + 1)}>Inc Count</button>
      <h1>{count}</h1>
    </div>
  );
};
