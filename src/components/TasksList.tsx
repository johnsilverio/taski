import { TaskItem } from "./TaskItem";
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

			<div>
				<div className={styles.emptyModeContainer}>
					<img
						className={styles.emptyModeImg}
						src="./src/assets/empty-task.svg"
						alt="Empty Task"
					/>
					<p>You don't have any tasks registered yet</p>
					<p>Create tasks and organize your to-do items.</p>
				</div>
				<TaskItem />
			</div>
		</>
	);
}
