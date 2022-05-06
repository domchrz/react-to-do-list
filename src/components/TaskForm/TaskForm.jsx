import { useState } from 'react';
import TaskInput from '../TaskInput';
import styles from './TaskForm.module.scss';
import IconButton from '../IconButton';

export default function TaskForm({ handleTaskSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const value = inputValue.trim();
    if (value.length) handleTaskSubmit(value);
    setInputValue('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        <span>Task</span>
        <TaskInput
          value={inputValue}
          handleChange={e => setInputValue(e.target.value)}
        />
      </label>
      <IconButton fontSize="3rem" icon="add_circle">
        Add
      </IconButton>
    </form>
  );
}
