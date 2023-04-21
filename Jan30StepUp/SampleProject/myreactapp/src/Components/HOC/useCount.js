import {useState} from "react";

export const useCount = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const handleCount = () => {
    setCount(count + 1);
  };
  return [count, handleCount];
};
