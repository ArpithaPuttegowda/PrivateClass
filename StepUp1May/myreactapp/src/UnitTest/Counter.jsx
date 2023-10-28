// Counter.js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count:</p>
      <span>{count}</span>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
