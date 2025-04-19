import React, { useEffect, useState } from "react";

const AutoCounter = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      console.log("clean up the timer");
      clearInterval(timerId);
    };
  }, [count]);

  return (
    <>
      <h1>Auto Counter</h1>
      <p>Aucto Counter Value: {count}</p>
    </>
  );
};

export default AutoCounter;
