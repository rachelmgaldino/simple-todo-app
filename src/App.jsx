import styles from "./App.module.css";

import "./global.css";

import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { ListHeader } from "./components/List/ListHeader";
import { EmptyTaskList } from "./components/List/EmptyTaskList";
import { Item } from "./components/List/Item";

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
      done: true,
    },
    {
      id: 4,
      title: "Read 5 books",
      done: true,
    },
    {
      id: 5,
      title: "Read 30 books",
      done: false,
    },
  ]);

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
                {tasks
                  .slice()
                  .reverse()
                  .map((task) => {
                    return (
                      <Item setTasks={setTasks} key={task.id} task={task} />
                    );
                  })}
              </ul>
            </div>
          ) : (
            <EmptyTaskList />
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
