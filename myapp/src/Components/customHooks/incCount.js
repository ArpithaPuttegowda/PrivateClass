import {useState} from "react";

const useInc = (initialValue) => {
  const [count, setCount] = useState(initialValue);
  const handleEvent = () => {
    setCount(count + 1);
  };
  return [count, handleEvent];
};

export default useInc;
