import css from "./todoListArea.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faFireFlameCurved, faFireFlameSimple } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useMemo } from "react";

const Todo = ({ todo, onTodoChange }) => {
  const priColor = useMemo(() => {
    switch (todo.priority) {
      case "Priority 1":
        return "var(--darkrose)";
      case "Priority 2":
        return "var(--darkpeach)";
      case "Priority 3":
        return "var(--darkblue)";
      default:
        return undefined;
    }
  }, [todo.priority]);

  const displayTime = useMemo(() => {
    if (!todo.time) {
      return;
    }
    if (typeof todo.time === 'string') {
      return todo.time;
    } else {
      const date = new Date(todo.time);
      return `${date.getHours()}:${date.getMinutes()}`;
    }
  }, [todo.time]);

  const handleCompletedChange = useCallback((e) => {
    onTodoChange({...todo, completed: e.target.checked})
  }, [onTodoChange, todo])

  return (
    <li>
      <input
        type="checkbox"
        name="completed"
        checked={todo.completed}
        onChange={handleCompletedChange}
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
          {todo.priority && (
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
          )}
        </button>
        <button className={css.timeSpan}>{displayTime}</button>
      </div>
    </li>
  );
};

export default Todo;
