import css from "./app.module.css";
import AllLists from '../allLists/allLists';
import { Container } from '../container/container';
import Footer from "../footer/footer";
import TodoListArea from "../todoListArea/todoListArea";
import { useState } from "react";
import TodoList from "../todoListArea/todoList";
import useListData from "../../hooks/useListData";

console.log(css);
export const App = () => {
    const [todos, setTodos] = useState([]);
    const [listData, listChange, setListData] = useListData();

    const addTodo = (todo) => {
        setTodos([todo, ...todos]);
    }
    const renderList = () => {
        return <TodoList />
    }

    console.log(todos);

  return (
    <div className={css.app}>
      <AllLists listData={listData} listChange={listChange} setListData={setListData} />
      <Container addTodo={addTodo}/>
      <TodoListArea todos={todos} />
      <Footer />
    </div>
  );
};
