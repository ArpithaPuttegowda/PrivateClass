import React, {useMemo, useState} from "react";

export const ExampleUseMemo = () => {
  const [count, setCount] = useState(0);
  const delay = useMemo(() => {
    for (let i = 0; i <= 10000000000; i++) {}
    return 10;
  }, []);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Inc {count}</button>
      <h1>{delay}</h1>
    </>
  );
};
