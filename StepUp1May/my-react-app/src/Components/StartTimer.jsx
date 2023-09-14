import { useState, useEffect, useCallback } from 'react';

// eslint-disable-next-line react/prop-types
function Timer({ startTimer }) {
  useEffect(() => {
    const intervalId = setInterval(() => {
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [startTimer]);

  return <div>Timer is running.</div>;
}

function ParentTimer() {
  const [timerStarted, setTimerStarted] = useState(false);

  // Define a callback function to start the timer
  const startTimer = useCallback(() => {
    setTimerStarted(true);
  }, []);

  useEffect(() => {
    if (timerStarted) {
    }
  }, [timerStarted]);

  return (
    <div>
      <h1>Timer App</h1>
      <button onClick={startTimer}>Start Timer</button>
      <Timer startTimer={startTimer} />
    </div>
  );
}

export default ParentTimer
