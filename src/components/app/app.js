import css from "./app.module.css";
import { cx } from "classnames";
import AllLists from '../allLists/allLists'
import { Container } from '../container/container'
import Footer from "../footer/footer";

console.log(css);
export const App = () => {
  return (
    <div className={css.app}>
      <AllLists />
      <Container />
      <section className={css.todoListArea}>
        <div className={css.todoList}>
          <h2 className={css.todoListTitle}>Meetings</h2>
          <div className={css.todoListBody}>
            <ul className={css.todos}>
              <li className="">
                <input type="checkbox" />
                <span className={css.customCheckbox}></span>
                <label className="">
                  <span className={css.todoSpan}>Meeting with project group</span>
                  <form className={css.editForm}>
                    <input type="text" className={css.editInput} />
                  </form>
                </label>
              </li>
              <li className="">
                <input type="checkbox" />
                <span className={css.customCheckbox}></span>
                <label className="">
                  <span className={css.todoSpan}>Meeting with manager</span>
                  <form className={css.editForm}>
                    <input type="text" className={css.editInput} />
                  </form>
                </label>
              </li>
              <li className="">
                <input type="checkbox" />
                <span className={css.customCheckbox}></span>
                <label className="">
                  <span className={css.todoSpan}>Meeting with manager</span>
                  <form className={css.editForm}>
                    <input type="text" className={css.editInput} />
                  </form>
                </label>
              </li>
              <li className="">
                <input type="checkbox" />
                <span className={css.customCheckbox}></span>
                <label className="">
                  <span className={css.todoSpan}>Meeting with manager</span>
                  <form className={css.editForm}>
                    <input type="text" className={css.editInput} />
                  </form>
                </label>
              </li>
              <li className="">
                <input type="checkbox" />
                <span className={css.customCheckbox}></span>
                <label className="">
                  <span className={css.todoSpan}>Meeting with manager</span>
                  <form className={css.editForm}>
                    <input type="text" className={css.editInput} />
                  </form>
                </label>
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
      </section>
      <Footer />
    </div>
  );
};
