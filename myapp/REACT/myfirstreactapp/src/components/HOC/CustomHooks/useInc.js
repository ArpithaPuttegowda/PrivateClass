import {useState} from "react";

export const useInc = (initialState) => {
  const [count, setCount] = useState(initialState);
  const handleInc = () => {
    setCount(count + 1);
  };
  return [count, handleInc];
};
