import css from "../app/app.module.css";
import useTodoData from "../../hooks/useTodoData";
import ExtraField from "./extraField";

export const TodoArea = () => {
  const [todoData, handleChange] = useTodoData();
  console.log(todoData)
  
  
  return (
    <div className={css.todoArea}>
      <div className={css.inputField}>
        <form className={css.mainForm} autoComplete="off">
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
