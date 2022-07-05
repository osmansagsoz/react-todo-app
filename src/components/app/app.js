import css from "./app.module.css";
import AllLists from "../allLists/allLists";
import { Container } from "../container/container";
import Footer from "../footer/footer";
import TodoListArea from "../todoListArea/todoListArea";
import { useState } from "react";
import TodoList from "../todoListArea/todoList";
import useListData from "../../hooks/useListData";
import useTodoData from "../../hooks/useTodoData";

console.log(css);
export const App = () => {
  const [listData, listChange, setListData] = useListData();
  const [todoData, handleChange, setTodoData] = useTodoData();
  const [todos, setTodos] = useState(listData.todos);

  const addTodo = (todo) => {
    if(!todoData.tag) {

    }
    if (listData.listTitle === todoData.tag) {
      setTodos([todo, ...todos]);
      console.log(todos)
    } else {

    }
  };
  const renderList = () => {
    return <TodoList />;
  };

  console.log(todos);

  return (
    <div className={css.app}>
      <AllLists listData={listData} listChange={listChange} setListData={setListData} />
      <Container
        addTodo={addTodo}
        todoData={todoData}
        handleChange={handleChange}
        setTodoData={setTodoData}
      />
      <TodoListArea todos={todos} />
      <Footer />
    </div>
  );
};
