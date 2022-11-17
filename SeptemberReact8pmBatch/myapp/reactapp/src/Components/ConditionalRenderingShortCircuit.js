import React, {useState} from "react";

export const ConditionalRenderingShortCircuit = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {isToggle && <h1>India</h1>}
    </div>
  );
};
