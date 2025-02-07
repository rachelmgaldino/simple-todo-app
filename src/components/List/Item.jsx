import { Check, Trash } from "phosphor-react";

import styles from "./Item.module.css";

export function Item({ task, setTasks }) {
  function handleChangeTaskStatus(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        return task.id === id
          ? { ...task, done: !task.done } // !task.done will invert the value of the done property
          : task;
      })
    );
  }

  function handleDeleteTask(id) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }
  return (
    <li key={task.id} className={styles.individualTask}>
      <input type="checkbox" />
      <div
        onClick={() => handleChangeTaskStatus(task.id)}
        className={`${styles.checkbox} ${
          task.done ? styles.done : styles.pending
        }`}
      >
        {task.done ? <Check className={styles.checkedBox} size={12} /> : ""}
      </div>
      <span className={`${task.done ? styles.checked : ""}`}>{task.title}</span>
      <button onClick={() => handleDeleteTask(task.id)}>
        <Trash />
      </button>
    </li>
  );
}
