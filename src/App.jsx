import styles from "./App.module.css";

import "./global.css";

import logo from "./assets/rocket-logo.svg";
import clipboard from "./assets/clipboard.svg";

import { Check, PlusCircle, Trash } from "phosphor-react";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Start todo project",
      done: true,
    },
    {
      id: 2,
      title: "Finish todo project",
      done: false,
    },
  ]);
  const [newTask, setNewTask] = useState("");

  const amountOfTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.done).length;

  function handleCreateNewTask(e) {
    e.preventDefault();
    const newTask = e.target.taskInput.value;
    setTasks([...tasks, { id: tasks.length + 1, title: newTask, done: false }]);
    setNewTask(""); // Clear the input after creating a new task
  }

  function handleNewTaskChange(e) {
    setNewTask(e.target.value); // Update the newTask state with the value of the input
  }

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
    <div>
      <header className={styles.header}>
        <img src={logo} />
        <h1>
          to<span>do</span>
        </h1>
      </header>

      <main>
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

        <div className={styles.taskList}>
          <header>
            <p className={styles.createdTasks}>
              Created tasks{" "}
              <span className={styles.taskCount}>{amountOfTasks}</span>
            </p>
            <p className={styles.doneTasks}>
              Completed{" "}
              <span className={styles.taskCount}>{completedTasks}</span>
            </p>
          </header>

          {tasks.length === 0 ? (
            <div className={styles.emptyTaskList}>
              <img src={clipboard} />
              <div className={styles.emptyTaskMessage}>
                <strong>You don't have any tasks registered yet</strong>
                <p>Create tasks and organize your to-do items</p>
              </div>
            </div>
          ) : (
            <div className={styles.taskList}>
              <ul>
                {tasks.slice().reverse().map((task) => {
                  return (
                    <li key={task.id} className={styles.individualTask}>
                      <input type="checkbox" />
                      <div
                        onClick={() => handleChangeTaskStatus(task.id)}
                        className={`${styles.checkbox} ${
                          task.done ? styles.done : styles.pending
                        }`}
                      >
                        {task.done ? (
                          <Check className={styles.checkedBox} size={12} />
                        ) : (
                          ""
                        )}
                      </div>
                      <span className={`${task.done ? styles.checked : ""}`}>
                        {task.title}
                      </span>
                      <button onClick={() => handleDeleteTask(task.id)}>
                        <Trash />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
