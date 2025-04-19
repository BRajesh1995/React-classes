// Chat GPT Counter Component

import React, { useState } from "react";

const InputCounter = () => {
  const [count, setCount] = useState(0);

  // Handle input change to manually update the count
  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    setCount(value); // Update the count state based on the user input
  };

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1); // Increment count
  };

  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1); // Decrement count
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Input Counter App</h1>

      {/* Input field that the user can modify manually */}
      <input
        type="number"
        value={count}
        onChange={handleInputChange}
        style={{
          padding: "10px",
          fontSize: "18px",
          width: "150px",
          textAlign: "center",
        }}
      />

      <div style={{ marginTop: "20px" }}>
        <button onClick={decreaseCount} style={buttonStyle}>
          -
        </button>

        {/* Count input (the same input box is reused for manual input) */}
        <input
          type="number"
          value={count}
          onChange={handleInputChange}
          style={{ fontSize: "20px", width: "100px", textAlign: "center" }}
        />

        <button onClick={increaseCount} style={buttonStyle}>
          +
        </button>
      </div>
    </div>
  );
};

// Style for the buttons
const buttonStyle = {
  padding: "10px 20px",
  fontSize: "18px",
  cursor: "pointer",
  margin: "0 10px",
};

export default InputCounter;
