import css from "./container.module.css";
import { Header } from "./header";
import { TodoArea } from "./todoArea";


export const Container = ({todoData, handleChange, setTodoData, tags, onTagCreated}) => {
  return (
    <section className={css.container}>
      <Header />
      <TodoArea
        todoData={todoData}
        handleChange={handleChange}
        setTodoData={setTodoData}
        tags={tags}
        onTagCreated={onTagCreated}
      />
    </section>
  );
};
