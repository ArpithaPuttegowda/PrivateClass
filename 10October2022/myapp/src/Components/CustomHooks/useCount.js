import {useState} from "react";

export const useCount = (initCount) => {
  const [count, setCount] = useState(initCount);
  const handleCount = () => {
    setCount(count + 1);
  };
  return [count, handleCount];
};
