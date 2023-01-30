import {useState} from "react";

const CountExample = () => {
  const [input, setInput] = useState(0);
  const [count, setCount] = useState(0);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleDec = () => {
    setCount(count - Number(input));
  };
  const handleInc = () => {
    setCount(count + Number(input));
  };
  return (
    <h1>
      <h2>Count</h2>
      <h3>{count}</h3>
      <button onClick={handleDec}>-</button>
      <input type="number" value={input} onChange={handleChange} />
      <button onClick={handleInc}>+</button>
    </h1>
  );
};

export default CountExample;
