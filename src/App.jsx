import styles from "./App.module.css";

import "./global.css";

import logo from "./assets/rocket-logo.svg";
import clipboard from "./assets/clipboard.svg";

import { PlusCircle } from "phosphor-react";
function App() {
  return (
    <div>
      <header className={styles.header}>
        <img src={logo} />
        <h1>
          to<span>do</span>
        </h1>
      </header>

      <main>
        <form className={styles.addToDoForm}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar
            <PlusCircle size={20} />
          </button>
        </form>

        <div className={styles.taskList}>
          <header>
            <p className={styles.createdTasks}>
              Tarefas criadas <span className={styles.taskCount}>0</span>
            </p>
            <p className={styles.doneTasks}>
              Concluidas <span className={styles.taskCount}>0</span>
            </p>
          </header>
        </div>
      </main>
    </div>
  );
}

export default App;
