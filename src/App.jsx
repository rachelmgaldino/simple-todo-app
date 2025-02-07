import styles from "./App.module.css";

import "./global.css";

import logo from "./assets/rocket-logo.svg";
import clipboard from "./assets/clipboard.svg";

import { PlusCircle, Trash } from "phosphor-react";
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

          {/* <div className={styles.emptyTaskList}>
            <img src={clipboard} />
            <div className={styles.emptyTaskMessage}>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div> */}

          <div className={styles.taskList}>
            <ul>
              <li className={styles.individualTask}>
                <input type="checkbox" />
                <span>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                </span>
                <button><Trash /></button>
              </li>
              <li className={styles.individualTask}>
                <input type="checkbox" />
                <span className={styles.checked}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  dolores necessitatibus accusamus laudantium.
                </span>
                <button title="Deletar tarefa">
                  <Trash />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
