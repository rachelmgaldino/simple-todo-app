import { useState } from "react";

import { PlusCircle } from "phosphor-react";

import styles from "./Form.module.css";

export function Form( {tasks, setTasks} ) {
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(e) {
    e.preventDefault();
    const newTask = e.target.taskInput.value;
    setTasks([...tasks, { id: tasks.length + 1, title: newTask, done: false }]);
    setNewTask(""); // Clear the input after creating a new task
  }

  function handleNewTaskChange(e) {
    setNewTask(e.target.value); // Update the newTask state with the value of the input
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.addToDoForm}>
      <input
        type="text"
        placeholder="Add a new task"
        name="taskInput"
        onChange={handleNewTaskChange}
        value={newTask}
        required
      />
      <button type="submit">
        Create
        <PlusCircle size={20} />
      </button>
    </form>
  );
}
