import styles from "./ListHeader.module.css";

export function ListHeader({ tasks }) {
  const sumAllTasks = tasks.length;
  const sumCompletedTasks = tasks.filter((task) => task.done).length;

  return (
    <div className={styles.taskCounter}>
      <p className={styles.createdTasks}>
        Created tasks <span className={styles.taskCount}>{sumAllTasks}</span>
      </p>
      <p className={styles.doneTasks}>
        Completed{" "}
        <span className={styles.taskCount}>
          {sumCompletedTasks} of {sumAllTasks}
        </span>
      </p>
    </div>
  );
}
