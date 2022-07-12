import css from "./todoListArea.module.css";
import Todo from "./todo";
import { deleteTag } from "../../services/tags";
import { useCallback } from "react";

const TodoList = ({ todos, todoData, handleChange, selectedTag }) => {
    const onDeleteListClick = useCallback(async () => {
        deleteTag(selectedTag.id);
    }, [selectedTag])

  return (
    <div className={css.todoList}>
      <h2 className={css.todoListTitle}>{selectedTag.name}</h2>
      <div className={css.todoListBody}>
        {todos ? (
          <ul className={css.todos}>
            {todos.map((todo, i) => {
              return <Todo key={todo.id} todo={todo} todoData={todoData} handleChange={handleChange} i={i} />;
            })}
          </ul>
        ) : null}
      </div>
      <div className={css.deleteArea}>
        <button className={css.clearCompleted} aria-label="Clear completed todos">
          Clear completed todos
        </button>
        <button className={css.deleteList} aria-label="Delete list" onClick={onDeleteListClick}>
          Delete list
        </button>
      </div>
    </div>
  );
};

export default TodoList;
