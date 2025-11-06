import styles from "./Header.module.css";
import { TaskInput } from "./TaskInput";

export function Header() {
	return (
		<div className={styles.headerContainer}>
			<img
				className={styles.headerLogo}
				src="./src/assets/taski-dark-logo.svg"
				alt="Taski Dark Logo"
			/>
			<TaskInput />
		</div>
	);
}
