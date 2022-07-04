import css from "../app/app.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import Todo from "./todo";

const TodoList = (props) => {
    console.log(props.todos)

    return (
        <div className={css.todoList}>
          <h2 className={css.todoListTitle}>Meetings</h2>
          <div className={css.todoListBody}>
            <ul className={css.todos}>
                {(props.todos).map(todo => {
                   return <Todo key={todo.id} todo={todo} />
                })}
              <li className="">
                <input type="checkbox" />
                <span className={css.customCheckbox}></span>
                <label className="">
                  <span className={css.todoSpan}>Meeting with manager</span>
                  <form className={css.editForm}>
                    <input type="text" className={css.editInput} />
                  </form>
                </label>
                <div className={css.extraWrapper}>
                <button className={css.priSpan}><FontAwesomeIcon icon={faFire} /></button>
                <button className={css.timeSpan}>18:00</button>
                </div>
              </li>
            </ul>
          </div>
          <div className={css.deleteArea}>
            <button className={css.clearCompleted} aria-label="Clear completed todos">
              Clear completed todos
            </button>
            <button className={css.deleteList} aria-label="Delete list">
              Delete list
            </button>
          </div>
        </div>
    )
}

export default TodoList;