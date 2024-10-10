import { useState } from "react";
import InputBox from "../inputbox/InputBox";
import TaskItems from "../taskitems/TaskItems";

const TodoContainer = () => {
  const [tasks, setTask] = useState([]);

  const addTask = (task) => {
    console.log(task);

    if (task) {
      setTask([...tasks, task]);
    }
  };
  const deleteTask = (id) => {
    console.log(id);
    const remainingTasks = tasks.filter((task) => task.id !== parseInt(id));
    setTask(remainingTasks);
  };
  // const tasks = [
  //   { id: Date.now() + 1, title: "Task-1" },
  //   { id: Date.now() + 2, title: "Task-2" },
  //   { id: Date.now() + 3, title: "Task-3" },
  //   { id: Date.now() + 4, title: "Task-4" },
  //   { id: Date.now() + 5, title: "Task-5" },
  // ];

  const updateTask = (id, updatedTitle) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: updatedTitle };
      }
      return task;
    });
    setTask(updatedTasks);
  };

  return (
    <>
      <InputBox addTask={addTask} />
      <TaskItems
        tasks={tasks}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </>
  );
};

export default TodoContainer;
