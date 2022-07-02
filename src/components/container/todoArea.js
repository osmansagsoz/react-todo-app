import css from "../app/app.module.css";
import useTodoData from "../../hooks/useTodoData";
import ExtraField from "./extraField";

export const TodoArea = ({addTodo}) => {
  const [todoData, handleChange, setTodoData] = useTodoData();

  console.log(todoData)
  
  function handleSubmit(e) {
    e.preventDefault();
    if(todoData.title.trim()) {
        addTodo({...todoData, id: `${Date.now()}`});
        setTodoData({...todoData, title: ""})
    }
  }
  function handleTextSubmit(e) {

  }

  return (
    <div className={css.todoArea}>
      <div className={css.inputField}>
        <form className={css.mainForm} onSubmit={handleSubmit} autoComplete="off">
          <textarea
            className={css.mainInput}
            placeholder="Meeting with mentor"
            name="title"
            value={todoData.title}
            onChange={handleChange}
          />
          <ExtraField />
        </form>
      </div>
    </div>
  );
};
