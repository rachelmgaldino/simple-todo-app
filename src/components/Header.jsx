import logo from "../assets/rocket-logo.svg";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} />
      <h1>
        to<span>do</span>
      </h1>
    </header>
  );
}
