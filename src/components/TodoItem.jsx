import styles from './TodoItem.module.css';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className={styles.checkbox}
      />
      <span
        className={todo.completed ? styles.completed : styles.text}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className={styles.delete}
      >
        ×
      </button>
    </li>
  );
}

export default TodoItem;
