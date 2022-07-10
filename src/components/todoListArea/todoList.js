import css from "./todoListArea.module.css";
import Todo from "./todo";

const TodoList = ({ todos, todoData, handleChange }) => {
  return (
    <div className={css.todoList}>
      <h2 className={css.todoListTitle}>Meetings</h2>
      <div className={css.todoListBody}>
        {todos ? (
          <ul className={css.todos}>
            {todos.map((todo) => {
              return <Todo key={todo.id} todo={todo} todoData={todoData} handleChange={handleChange} />;
            })}
          </ul>
        ) : null}
      </div>
      <div className={css.deleteArea}>
        <button className={css.clearCompleted} aria-label="Clear completed todos">
          Clear completed todos
        </button>
        <button className={css.deleteList} aria-label="Delete list">
          Delete list
        </button>
      </div>
    </div>
  );
};

export default TodoList;
