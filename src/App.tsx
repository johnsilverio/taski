import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TasksList";

export function App() {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<TaskList />
			</div>
		</>
	);
}
