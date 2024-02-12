import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    

    if(isRunning === true){
      setIsRunning(false);
    } else if (isRunning === false){
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handleReset = () => {
    setCount(0);
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handlePause} >
      {isRunning ? 'Pause' : 'resume'}
      </button>
      <button onClick={handleReset} disabled={count === 0 && !isRunning}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
