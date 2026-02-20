import { useState } from 'react';
import styles from './AddTodo.module.css';

function AddTodo({ onAdd }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input);
      setInput('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Add</button>
    </form>
  );
}

export default AddTodo;
