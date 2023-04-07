import React, {useState, useEffect} from "react";

export const Timer = () => {
  const [showTimer, setShowTimer] = useState(true);
  const [timer, setTimer] = useState(0);

  const handleTimer = () => {
    setShowTimer(!showTimer);
  };

  useEffect(() => {
    let id;
    if (showTimer) {
      id = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    //componentwillUnmount
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <button onClick={handleTimer}>
        {!showTimer ? "Hide Timer" : "Show Timer"}
      </button>
      {!showTimer && <h1>{timer}</h1>}
    </div>
  );
};
