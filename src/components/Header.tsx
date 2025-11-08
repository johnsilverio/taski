import styles from "./Header.module.css";
import { TaskInput } from "./TaskInput";

interface HeaderProps {
	createTask: (taskContent: string) => void;
}

export function Header({ createTask }: HeaderProps) {
	return (
		<div className={styles.headerContainer}>
			<img
				className={styles.headerLogo}
				src="./src/assets/taski-dark-logo.svg"
				alt="Taski Dark Logo"
			/>
			<TaskInput createTask={createTask} />
		</div>
	);
}
