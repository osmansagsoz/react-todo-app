import css from "./app.module.css";
import { cx } from "classnames";
import AllLists from '../allLists/allLists';
import { Container } from '../container/container';
import Footer from "../footer/footer";
import TodoListArea from "../todoListArea/todoListArea";

console.log(css);
export const App = () => {
  return (
    <div className={css.app}>
      <AllLists />
      <Container />
      <TodoListArea />
      <Footer />
    </div>
  );
};
