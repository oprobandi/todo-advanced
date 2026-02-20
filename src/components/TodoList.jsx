import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p className={styles.empty}>No tasks to show</p>;
  }

  return (
    <ul className={styles.list}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
