import css from "../app/app.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faFireFlameCurved, faFireFlameSimple } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
// import useTodoData from "../../hooks/useTodoData";

const Todo = ({ todo }) => {
  // const [todoData, handleChange] = useTodoData()
  const [priColor, setPriColor] = useState("");

  useEffect(() => {
    if (todo.priority === "Priority 1") {
      setPriColor("var(--darkrose)");
    } else if (todo.priority === "Priority 2") {
      setPriColor("#f78f4e");
    } else {
      setPriColor("#9fdbf8");
    }
  }, [todo.priority]);

  return (
    <li>
      <input
        type="checkbox"
        name="completed"
        // checked={todoData.completed}
        // onChange={handleChange}
      />
      <span className={css.customCheckbox}></span>
      <label>
        <span className={css.todoSpan}>{todo.title}</span>
        <form className={css.editForm}>
          <input type="text" className={css.editInput} />
        </form>
      </label>
      <div className={css.extraWrapper}>
        <button className={css.priSpan}>
          <FontAwesomeIcon
            icon={
              todo.priority === "Priority 1"
                ? faFire
                : todo.priority === "Priority 2"
                ? faFireFlameCurved
                : faFireFlameSimple
            }
            style={{ color: priColor }}
            className={css.priIcon}
          />
        </button>
        <button className={css.timeSpan}>{todo.time}</button>
      </div>
    </li>
  );
};

export default Todo;
