import clipboard from "../../assets/clipboard.svg";

import styles from "./EmptyTaskList.module.css";

export function EmptyTaskList() {
  return (
    <div className={styles.emptyTaskList}>
      <img src={clipboard} />
      <div className={styles.emptyTaskMessage}>
        <strong>You don't have any tasks registered yet</strong>
        <p>Create tasks and organize your to-do items</p>
      </div>
    </div>
  );
}