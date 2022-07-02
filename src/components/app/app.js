import css from "./app.module.css";
import { cx } from "classnames";
import AllLists from '../allLists/allLists';
import { Container } from '../container/container';
import Footer from "../footer/footer";
import TodoListArea from "../todoListArea/todoListArea";
import { useState } from "react";

console.log(css);
export const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([todo, ...todos]);
    }

    console.log(todos);

  return (
    <div className={css.app}>
      <AllLists />
      <Container addTodo={addTodo}/>
      <TodoListArea todos={todos} />
      <Footer />
    </div>
  );
};
