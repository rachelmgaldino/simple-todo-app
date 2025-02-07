import styles from "./App.module.css";

import "./global.css";

import { Check, Trash } from "phosphor-react";
import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { ListHeader } from "./components/List/ListHeader";
import { EmptyTaskList } from "./components/List/EmptyTaskList";

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
      done: true,
    },
    {
      id: 3,
      title: "Componentize the project",
      done: false,
    },
    {
      id: 4,
      title: "Deploy the project",
      done: false,
    },
    {
      id: 5,
      title: "Read 5 books",
      done: false,
    }
  ]);

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
      <Header />

      <section className={styles.content}>
        <Form tasks={tasks} setTasks={setTasks} />

        <div className={styles.taskList}>
          <ListHeader tasks={tasks} />

          {tasks.length !== 0 ? (
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
          ) : (
            <EmptyTaskList />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
