import css from "../app/app.module.css";
import TodoList from "./todoList";

const TodoListArea = () => {
  return (
    <section className={css.todoListArea}>
      <TodoList />
    </section>
  );
};

export default TodoListArea;
