import styles from './App.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from './store/selectors/tasks';
import { selectIsLoading } from './store/selectors/isLoading';
import { selectError } from './store/selectors/error';
import ACTIONS from './store/actions/actions';
import { TaskGroup, TaskForm, Spinner, Navbar, Modal, ErrorMessage } from './components';

export default function App() {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const onDrop =
    (isDone = false) => item => {
      if (item.done === isDone) return;
      dispatch(ACTIONS.toggleDone(item.id));
    };

  const removeTask = id => () => dispatch(ACTIONS.removeTask(id));

  const dispatchError = message =>
    dispatch(ACTIONS.error(typeof message === 'string' ? new Error(message) : null));

  const isTaskNameValid = value =>
    tasks.some(({ title }) => title?.toLowerCase() === value.toLowerCase()) ? false : true;

  const submitTask = value => {
    dispatch(
      ACTIONS.addTask({
        title: value,
        id: Math.random(),
        done: false,
      })
    );
  };

  const handleTaskSubmit = value =>
    isTaskNameValid(value)
      ? submitTask(value)
      : dispatchError('Task already exists, please choose another name.');

  return (
    <>
      <header>
        <Navbar>
          <TaskForm
            tasks={tasks.map(t => t.title)}
            handleTaskSubmit={handleTaskSubmit}
          />
        </Navbar>
      </header>
      <main>
        <TaskGroup
          groupName="Pending"
          tasks={tasks.filter(({ done }) => !done)}
          onDrop={onDrop()}
          removeTask={removeTask}
        />
        <p className={styles['list-separator']}>Drag & Drop</p>
        <TaskGroup
          groupName="Finished"
          tasks={tasks.filter(({ done }) => done)}
          onDrop={onDrop(true)}
          removeTask={removeTask}
        />
      </main>
      {isLoading && (
        <Modal>
          <Spinner />
        </Modal>
      )}
      {error && (
        <Modal>
          <ErrorMessage message={error.message} handleClick={dispatchError} />
        </Modal>
      )}
    </>
  );
}
