import { useDrag } from 'react-dnd';
import IconButton from '../IconButton/IconButton';
import styles from './Task.module.scss';

export default function Task({ task, removeTask }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'task',
    item: { id: task.id, done: task.done },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <li
      className={task.done ? styles.task + ' ' + styles.done : styles.task}
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}>
      <p>{task.title}</p>
      <IconButton icon="delete" handleClick={removeTask}>
        Remove
      </IconButton>
    </li>
  );
}
