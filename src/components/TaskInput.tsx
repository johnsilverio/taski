import styles from "./TaskInput.module.css";
import { useState, type FormEvent } from "react";

interface TaskInputProps {
	createTask: (taskContent: string) => void;
}

export function TaskInput({ createTask }: TaskInputProps) {
	const [text, setText] = useState("");

	const handleSubmitTask = (e: FormEvent) => {
		e.preventDefault();
		createTask(text);
		setText("");
	};

	return (
		<>
			<form className={styles.formNewTask} onSubmit={handleSubmitTask}>
				<input
					onChange={(e) => setText(e.target.value)}
					name="taskName"
					placeholder="Type something..."
					type="text"
					value={text}
					required
				/>
				<button type="submit">New Task</button>
			</form>
		</>
	);
}
