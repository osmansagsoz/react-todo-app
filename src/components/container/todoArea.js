import css from "../app/app.module.css";
import cx from "classnames";
import { useState } from "react";
import { useDropdown } from "../allLists/useDropdown";

export const TodoArea = () => {
  const [todoData, setTodoData] = useState({
    id: "",
    title: "",
    completed: false,
    time: "",
    priority: "",
    tag: ""
  });
  const [closed, showTimeField] = useDropdown({initialClosed: true})
  console.log(closed);
  function handleChange(event) {
    setTodoData({
      ...todoData,
      [event.target.name]: event.target.value
    });
  }

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
          <div className={css.extraField}>
            <div className={css.dateWrapper}>
              <button 
              className={css.dateField}
              onClick={showTimeField}
              >Add time</button>
              <div className={cx(css.popper, !closed && css.popperOpen)}>
                <div className={css.timeForm}>
                  <input
                    type="text"
                    name="time"
                    placeholder="eg, 16:00"
                    value={todoData.time}
                    onChange={handleChange}
                  />
                  <button aria-label="Add selected time">+</button>
                </div>
              </div>
            </div>
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
  );
};
