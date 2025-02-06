import styles from "./App.module.css";

import "./global.css";

import logo from "./assets/rocket-logo.svg";
function App() {
  return (
    <div>
      <header className={styles.header}>
        <img src={logo} />
        <h1>
          to<span>do</span>
        </h1>
      </header>
    </div>
  );
}

export default App;
