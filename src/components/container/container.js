import css from "../app/app.module.css";
import { Header } from "./header";
import { TodoArea } from "./todoArea";

export const Container = () => {
  return (
    <section className={css.container}>
      <Header />
      <TodoArea />
    </section>
  );
};
