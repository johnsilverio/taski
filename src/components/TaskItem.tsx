import styles from "./TaskItem.module.css";
import { Trash2, Circle, CheckCircle2 } from "lucide-react";
import type { Task } from "../App.tsx";

interface TaskItemProps {
	task: Task;
	deleteTask: (id: string) => void;
	toggleTask: (id: string) => void;
}

export function TaskItem({ task, deleteTask, toggleTask }: TaskItemProps) {
	return (
		<div className={styles.card}>
			<div className={styles.checkContainer}>
				{task.isCompleted ? (
					<CheckCircle2
						onClick={() => toggleTask(task.id)}
						size={20}
						stroke="var(--color-primary)"
					/>
				) : (
					<Circle
						onClick={() => toggleTask(task.id)}
						className={styles.check}
						size={20}
						stroke="var(--border-color)"
					/>
				)}
			</div>
			<p className={task.isCompleted ? styles.checkedTask : ""}>
				<a onClick={() => toggleTask(task.id)}>{task.content}</a>
			</p>
			<div className={styles.trashContainer}>
				<Trash2
					onClick={() => deleteTask(task.id)}
					className={styles.trash}
					opacity={0.5}
					size={19}
				/>
			</div>
		</div>
	);
}
