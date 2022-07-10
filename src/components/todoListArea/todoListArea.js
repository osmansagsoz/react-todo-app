import css from "./todoListArea.module.css";
import TodoList from "./todoList";

const TodoListArea = ({ todos }) => {
    
  return (
    <section className={css.todoListArea}>
      <TodoList todos={todos} />
    </section>
  );
};

export default TodoListArea;
