import css from "../app/app.module.css";
import ExtraField from "./extraField";
import { useDropdown } from "../allLists/useDropdown";

export const TodoArea = ({ addTodo, todoData, handleChange, setTodoData }) => {
  const [closed, showTimeField, setClosed] = useDropdown({ initialClosed: true });
  const [priClosed, showPriField, setPriClosed] = useDropdown({ initialClosed: true });
  const [tagClosed, showTagField, setTagClosed] = useDropdown({ initialClosed: true });

  // console.log(todoData);

  function handleSubmit(e) {
    e.preventDefault();
    if (todoData.title.trim()) {
      addTodo({ ...todoData, id: `${Date.now()}` });
      setTodoData({ ...todoData, title: "", completed: false, time: "", priority: "", tag: "" });
      setClosed(true);
      setPriClosed(true);
      setTagClosed(true);
    }
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
