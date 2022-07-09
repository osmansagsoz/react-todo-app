import css from "../app/app.module.css";
import TodoList from "./todoList";

const TodoListArea = ({ todos }) => {
    
  return (
    <section className={css.todoListArea}>
      <TodoList todos={todos} />
    </section>
  );
};

export default TodoListArea;
