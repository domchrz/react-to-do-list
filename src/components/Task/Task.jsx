import classNames from 'classnames';
import { useDrag } from 'react-dnd';
import IconButton from '../IconButton';
import styles from './Task.module.scss';

export default function Task({ task, removeTask }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'task',
    item: { id: task.id, done: task.done },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <li
      className={classNames(styles.task, {
        [styles.done]: task.done,
        [styles.dragged]: isDragging,
      })}
      ref={drag}>
      <p>{task.title}</p>
      <IconButton icon="delete" handleClick={removeTask} />
    </li>
  );
}
