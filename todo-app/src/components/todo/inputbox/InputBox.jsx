import React from "react";
import "./inputbox.css";
import { useState } from "react";

const InputBox = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const handleAddTask = () => {
    if (title) {
      addTask({
        id: Date.now(),
        title,
      });
      setTitle("");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;

    setTitle(value);
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          name=""
          placeholder="Enter your Task"
          onChange={handleChange}
          value={title}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </>
  );
};

export default InputBox;
