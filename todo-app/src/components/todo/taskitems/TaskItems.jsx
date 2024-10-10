import React, { useState } from "react";
import "./taskItems.css";

const TaskItems = ({ tasks, deleteTask, updateTask }) => {
  const [editId, setEditId] = useState(null); // Track the task being edited
  const [newTitle, setNewTitle] = useState(""); // Track the updated title

  const handleDelete = (e) => {
    const id = e.target.id;
    deleteTask(id);
  };

  const handleEditClick = (task) => {
    setEditId(task.id); // Set the task in edit mode
    setNewTitle(task.title); // Set the current title for editing
  };

  const handleSaveClick = (id) => {
    updateTask(id, newTitle); // Call updateTask to save the new title
    setEditId(null); // Exit edit mode
  };

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value); // Update the title in real-time
  };

  return (
    <div className="task-container">
      <h1>Task List</h1>
      <ul>
        {tasks &&
          !!tasks.length &&
          tasks.map((task) => {
            return (
              <div className="list-items-cont" key={task.id}>
                {editId === task.id ? (
                  // If in edit mode, show input to edit title
                  <input
                    type="text"
                    value={newTitle}
                    onChange={handleTitleChange}
                  />
                ) : (
                  // Otherwise show the task title
                  <li>{task.title}</li>
                )}

                {/* Toggle between edit/save button */}
                {editId === task.id ? (
                  <button onClick={() => handleSaveClick(task.id)}>Save</button>
                ) : (
                  <button onClick={() => handleEditClick(task)}>Edit</button>
                )}

                {/* Delete button */}
                <button id={task.id} onClick={handleDelete}>
                  Delete
                </button>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default TaskItems;
