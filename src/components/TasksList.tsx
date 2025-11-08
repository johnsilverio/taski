import { TaskItem } from "./TaskItem";
import styles from "./TasksList.module.css";
import type { Task } from "../App.tsx";

interface TaskListProps {
	tasks: Task[];
	deleteTask: (id: string) => void;
	toggleTask: (id: string) => void;
}

export function TaskList({ tasks, deleteTask, toggleTask }: TaskListProps) {
	const completeCountFilter = tasks.filter((task) => {
		return task.isCompleted === true;
	}).length;

	return (
		<>
			<header className={styles.infoContainer}>
				<div className={styles.info}>
					<strong>Tasks created</strong>
					<span className={styles.infoCount}>{tasks.length}</span>
				</div>
				<div className={styles.info}>
					<strong>Completed</strong>
					<span className={styles.infoCount}>{completeCountFilter}</span>
				</div>
			</header>

			<div>
				{tasks.length === 0 ? (
					<div className={styles.emptyModeContainer}>
						<img
							className={styles.emptyModeImg}
							src="./src/assets/empty-task.svg"
							alt="Empty Task"
						/>
						<p>You don't have any tasks registered yet</p>
						<p>Create tasks and organize your to-do items.</p>
					</div>
				) : (
					tasks.map((task) => {
						return (
							<TaskItem
								toggleTask={toggleTask}
								deleteTask={deleteTask}
								key={task.id}
								task={task}
							/>
						);
					})
				)}
			</div>
		</>
	);
}
