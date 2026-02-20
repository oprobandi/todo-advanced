import styles from './FilterButtons.module.css';

function FilterButtons({ filter, setFilter }) {
  const filters = ['all', 'active', 'completed'];

  return (
    <div className={styles.filters}>
      {filters.map(f => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`${styles.filterBtn} ${filter === f ? styles.active : ''}`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
