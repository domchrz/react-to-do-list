import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import ACTIONS from '../../store/actions/actions';
import Tasks from '../Tasks/Tasks';
import styles from './List.module.scss';

export default function TaskLists({ tasks, title }) {
  const dispatch = useDispatch();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'task',
    drop: (item) => {
      if (
        (item.done && title === 'Finished') ||
        (!item.done && title === 'Pending')
      )
        return;
      dispatch(ACTIONS.toggleDone(item.id));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const removeTask = (id) => () => dispatch(ACTIONS.removeTask(id));

  return (
    <div
      ref={drop}
      className={isOver ? styles.list + ' ' + styles.drop : styles.list}>
      <h2>{title}</h2>
      {!!tasks.length && (
        <Tasks tasks={tasks} removeTask={removeTask} />
      )}
    </div>
  );
}
