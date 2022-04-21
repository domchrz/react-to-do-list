import Task from '../Task/Task';
import styles from './Tasks.module.scss';

export default function Tasks({ removeTask, tasks }) {
  return (
    <ul className={styles.tasks}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} removeTask={removeTask(task.id)} />
      ))}
    </ul>
  );
}
