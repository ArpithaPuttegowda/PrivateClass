import React, {useState} from "react";

export const CountF = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("sachin");
  const handleInc = () => {
    setCount(1000);
    setName("Dhoni");
  };
  return (
    <>
      <div>
        CountF
        <p>
          <button onClick={handleInc}>Inc Count</button>
          <h1>
            {count}....{name}
          </h1>
        </p>
      </div>
    </>
  );
};
