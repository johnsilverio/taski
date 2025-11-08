import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TasksList";
import { useState } from "react";

export interface Task {
	id: string;
	content: string;
	isCompleted: boolean;
}

export function App({}) {
	const [tasks, setTasks] = useState<Task[]>([]);

	const handleCreateTask = (taskContent: string) => {
		setTasks((tasks) => [
			...tasks,
			{
				id: crypto.randomUUID(),
				content: taskContent,
				isCompleted: false,
			},
		]);
	};

	const handleDeleteTask = (id: string) => {
		setTasks((tasks) =>
			tasks.filter((task) => {
				return task.id !== id;
			})
		);
	};

	const handleToggleTask = (id: string) => {
		setTasks((tasks) =>
			tasks.map((task) => {
				if (task.id === id) {
					return { ...task, isCompleted: !task.isCompleted };
				} else {
					return task;
				}
			})
		);
	};

	return (
		<>
			<Header createTask={handleCreateTask} />
			<div className={styles.container}>
				<TaskList
					toggleTask={handleToggleTask}
					deleteTask={handleDeleteTask}
					tasks={tasks}
				/>
			</div>
		</>
	);
}
