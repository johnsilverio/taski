import styles from "./TaskInput.module.css";

export function TaskInput() {
	return (
		<>
			<form className={styles.formNewTask}>
				<input required placeholder="Type something..." type="text" />
				<button>New Task</button>
			</form>
		</>
	);
}
