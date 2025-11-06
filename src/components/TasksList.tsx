import styles from "./TasksList.module.css";

export function TaskList() {
	return (
		<>
			<header className={styles.infoContainer}>
				<div className={styles.info}>
					<strong>Tasks created</strong>
					<span className={styles.infoCount}>0</span>
				</div>
				<div className={styles.info}>
					<strong>Completed</strong>
					<span className={styles.infoCount}>0</span>
				</div>
			</header>

			<div>Empty Mode</div>
		</>
	);
}
