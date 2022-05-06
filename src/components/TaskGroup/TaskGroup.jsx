import classNames from 'classnames';
import { useDrop } from 'react-dnd';
import Tasks from '../TaskList';
import styles from './TaskGroup.module.scss';

export default function TaskGroup({ tasks, groupName, onDrop, removeTask }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'task',
    drop: onDrop,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={classNames(styles.list, { [styles.drop]: isOver })}>
      <h2>{groupName}</h2>
      {!!tasks.length && (
        <Tasks tasks={tasks} removeTask={removeTask} />
      )}
    </div>
  );
}
