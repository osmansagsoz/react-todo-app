import css from "../app/app.module.css";
import TodoList from "./todoList";

const TodoListArea = (props) => {
    
  return (
    <section className={css.todoListArea}>
      <TodoList todos={props.todos} />
    </section>
  );
};

export default TodoListArea;
