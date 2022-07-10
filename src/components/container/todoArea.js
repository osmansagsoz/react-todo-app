import css from "./container.module.css";
import ExtraField from "./extraField";
import { useDropdown } from "../allLists/useDropdown";
import { createTodo } from "../../services/todos";
import { useCallback } from "react";

export const TodoArea = ({ todoData, handleChange, setTodoData }) => {
  const [closed, showTimeField, setClosed] = useDropdown({ initialClosed: true });
  const [priClosed, showPriField, setPriClosed] = useDropdown({ initialClosed: true });
  const [tagClosed, showTagField, setTagClosed] = useDropdown({ initialClosed: true });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (todoData.title.trim()) {
      createTodo({ ...todoData, id: Date.now() });
      setTodoData({ ...todoData, title: "", completed: false, time: "", priority: "", tagId: "" });
      setClosed(true);
      setPriClosed(true);
      setTagClosed(true);
    }
  }, [setClosed, setPriClosed, setTagClosed, setTodoData, todoData])

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
          <ExtraField
            todoData={todoData}
            handleChange={handleChange}
            setTodoData={setTodoData}
            closed={closed}
            showTimeField={showTimeField}
            priClosed={priClosed}
            showPriField={showPriField}
            tagClosed={tagClosed}
            showTagField={showTagField}
          />
        </form>
      </div>
    </div>
  );
};
