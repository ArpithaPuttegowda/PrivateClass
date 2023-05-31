import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (eve) => {
    setInputValue(eve?.target?.value);
  };
  const handleInc = () => {
    setCount(count + Number(inputValue));
  };

  const handleDec = () => {
    setCount(count - Number(inputValue));
  };
  return (
    <div>
      <h1 data-testid="heading">
        Counter <span data-testid="count">{count}</span>
      </h1>
      <button data-testid="inc-btn" onClick={handleInc}>
        +
      </button>
      <input
        placeholder="enter input"
        data-testid="input"
        onChange={handleChange}
        type="number"
      />
      <button data-testid="dec-btn" onClick={handleDec}>
        -
      </button>
    </div>
  );
};
