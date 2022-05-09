import Task from '../Task';
import styles from './TaskList.module.scss';

export default function TaskList({ removeTask, tasks }) {
  return (
    <ul className={styles.tasks}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} removeTask={removeTask(task.id)} />
      ))}
    </ul>
  );
}
