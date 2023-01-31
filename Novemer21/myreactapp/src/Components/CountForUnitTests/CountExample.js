import {useState} from "react";

const CountExample = ({data}) => {
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
      <h2 data-testid="header">Count Value</h2>
      <h3 data-testid="count">{count}</h3>
      <button data-testid="dec" onClick={handleDec}>
        -
      </button>
      <input
        data-testid="input"
        type="number"
        value={input}
        onChange={handleChange}
      />
      <button data-testid="inc" onClick={handleInc}>
        +
      </button>
      <h1>{data}</h1>
    </h1>
  );
};

export default CountExample;
