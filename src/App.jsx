import styles from "./App.module.css";

import "./global.css";

import logo from "./assets/rocket-logo.svg";
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
            <PlusCircle />
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
