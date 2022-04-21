import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ACTIONS from '../../store/actions/actions';
import TaskInput from '../TaskInput/TaskInput';

import styles from './TaskForm.module.scss';
import IconButton from '../IconButton/IconButton';

export default function TaskForm({ tasks }) {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputValue.trim();
    if (!value.length) return;
    if (tasks.some((t) => t.toLowerCase() === value.toLocaleLowerCase())) {
      const error = new Error(
        'Task already exists, please choose another name.'
      );
      dispatch(ACTIONS.error(error));
    } else {
      const task = {
        title: value,
        id: Math.random(),
        done: false,
      };
      dispatch(ACTIONS.addTask(task));
    }
    setInputValue('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        <span>Task</span>
        <TaskInput
          value={inputValue}
          handleChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <IconButton fontSize="3rem" icon="add_circle">
        Add
      </IconButton>
    </form>
  );
}
