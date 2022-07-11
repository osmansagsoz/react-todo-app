import css from "./todoListArea.module.css";
import TodoList from "./todoList";

const TodoListArea = ({ todos, todoData, handleChange, selectedTag }) => {
    
  return (
    <section className={css.todoListArea}>
      <TodoList todos={todos} todoData={todoData} handleChange={handleChange} selectedTag={selectedTag} />
    </section>
  );
};

export default TodoListArea;
