import { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Count cannot be less than zero!");
    }
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    setCount(value); // Update the count state based on the user input
  };

  return (
    <div className="counter-container">
      <button onClick={handleDecrement}>-</button>
      <p className="count-text">
        Counter Value:{" "}
        <input
          type="number"
          value={count}
          className="count-value"
          onChange={handleInputChange}
        />
      </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
