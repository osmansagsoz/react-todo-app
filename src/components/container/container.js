import css from "./container.module.css";
import { Header } from "./header";
import { TodoArea } from "./todoArea";


export const Container = ({todoData, handleChange, setTodoData, tags, onTagCreated, appState}) => {
  return (
    <section className={css.container}>
      <Header appState={appState} />
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
