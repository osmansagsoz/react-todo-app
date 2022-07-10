import css from "./todoListArea.module.css";
import TodoList from "./todoList";

const TodoListArea = ({ todos, todoData, handleChange }) => {
    
  return (
    <section className={css.todoListArea}>
      <TodoList todos={todos} todoData={todoData} handleChange={handleChange} />
    </section>
  );
};

export default TodoListArea;
