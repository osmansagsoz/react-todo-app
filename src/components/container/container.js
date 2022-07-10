import css from "./container.module.css";
import { Header } from "./header";
import { TodoArea } from "./todoArea";


export const Container = (props) => {
  return (
    <section className={css.container}>
      <Header />
      <TodoArea
        addTodo={props.addTodo}
        todoData={props.todoData}
        handleChange={props.handleChange}
        setTodoData={props.setTodoData}
      />
    </section>
  );
};
