import css from "../app/app.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import useTodoData from "../../hooks/useTodoData";


const Todo = ({todo}) => {
    const [todoData, handleChange] = useTodoData()
    
  return (
    <li>
      <input 
        type="checkbox"
        name="completed"
        checked={todoData.completed}
        onChange={handleChange}
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
          <FontAwesomeIcon icon={faFire} />
        </button>
        <button className={css.timeSpan}>17:00</button>
      </div>
    </li>
  );
};

export default Todo;
