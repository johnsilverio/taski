import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TasksList";
import { useState } from "react";

interface Task {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function App({ }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <TaskList />
      </div>
    </>
  );
}
