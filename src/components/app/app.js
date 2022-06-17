import css from "./app.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { cx } from "classnames";

console.log(css);
export const App = () => {
  return (
    <div className={css.app}>
      <section className={css.container}>
        <header>
          <h1 className={css.title}>React Todo App</h1>
          <p className={css.headerP}>Add your first todo!</p>
          <div className={css.loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <FontAwesomeIcon icon={faCheckDouble} className={css.icon} />
        </header>
        <div className={css.todoArea}>
          <div className={css.inputField}>
            <form className={css.mainForm} autoComplete="off">
              <textarea className={css.mainInput} placeholder="Meeting with mentor"></textarea>
              <div className={css.extraField}>
                <button className={css.dateField}>Today</button>
                <div className={css.todoTags}>
                  <button className={css.listTag} aria-label="Add list tag">
                    Tag
                  </button>
                  <button className={css.priority} aria-label="Set priority">
                    Pri
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className={css.allLists}>
        <FontAwesomeIcon icon={faList} />
        <h2 className={css.todoListsTitle}>My Lists</h2>
        <ul className={css.todoLists}>
          <li className={css.activeList}>Meetings</li>
          <li>Daily Routine</li>
          <li>Grocery</li>
        </ul>
        <form>
          <input
            type="text"
            className={css.newList}
            placeholder="New list name"
            aria-label="New list name"
          />
          <button className={css.listButton} aria-label="Create new list">
            +
          </button>
        </form>
      </section>
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
      <footer>
        <h3>&copy; Osman Sağsöz 2022</h3>
        <ul className={css.foot}>
          <li>
            <a
              href="https://www.linkedin.com/in/osman-sagsoz-053621225/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="fa-brands fa-linkedin-in" aria-hidden="true"></span>
              <span className="sr-only">Linked in</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/osmansagsoz" target="_blank" rel="noreferrer">
              <span className="fa-brands fa-github"></span>
              <span className="sr-only">Github</span>
            </a>
          </li>
          <li>
            <a href="https://codepen.io/osmansagsoz" target="_blank" rel="noreferrer">
              <span className="fa-brands fa-codepen"></span>
              <span className="sr-only">Codepen</span>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
