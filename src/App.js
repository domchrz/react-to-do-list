import { useSelector } from 'react-redux';
import styles from './App.module.scss';
import { selectTasks } from './helpers/selectors/tasks.selector';
import { selectIsLoading } from './helpers/selectors/loading.selector';
import List from './components/List/List';
import TaskForm from './components/TaskForm/TaskForm';
import { selectError } from './helpers/selectors/error.selector';
import Spinner from './components/Spinner/Spinner';
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal/Modal';
import Error from './components/Error/Error';

export default function App() {
  const tasks = useSelector(selectTasks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <header>
        <Navbar>
          <TaskForm tasks={tasks.map((t) => t.title)} />
        </Navbar>
      </header>
      <main>
        <List title="Pending" tasks={tasks.filter(({ done }) => !done)} />
        <p className={styles['list-separator']}>Drag & Drop</p>
        <List title="Finished" tasks={tasks.filter(({ done }) => done)} />
      </main>
      {isLoading && (
        <Modal>
          <Spinner />
        </Modal>
      )}
      {error && (
        <Modal>
          <Error message={error.message} />
        </Modal>
      )}
    </>
  );
}
