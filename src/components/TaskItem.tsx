import styles from "./TaskItem.module.css";
import { Trash2, Circle, CheckCircle2 } from "lucide-react";

export function TaskItem() {
	return (
		<>
			<div className={styles.card}>
				<div className={styles.checkContainer}>
					<Circle
						className={styles.check}
						size={20}
						stroke="var(--border-color)"
					/>
				</div>
				<p>
					Integer urna interdum massa libero auctor neque turpis turpis semper.
					Duis vel sed fames integer.
				</p>
				<div className={styles.trashContainer}>
					<Trash2 className={styles.trash} opacity={0.5} size={19} />
				</div>
			</div>
			<div className={styles.card}>
				<div className={styles.checkContainer}>
					<CheckCircle2 size={20} stroke="var(--color-primary)" />
				</div>
				<p className={styles.checkedTask}>
					Integer urna interdum massa libero auctor neque turpis turpis semper.
					Duis vel sed fames integer.
				</p>
				<div className={styles.trashContainer}>
					<Trash2 className={styles.trash} opacity={0.5} size={19} />
				</div>
			</div>
		</>
	);
}
