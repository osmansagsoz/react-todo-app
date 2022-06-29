import css from "../app/app.module.css";
import { useState } from "react";

export const TodoArea = () => {
    const [todoData, setTodoData] = useState({
        id: "",
        title: "",
        completed: false
    })

    function handleChange(event) {
        setTodoData({
            ...todoData,
            [event.target.name]: event.target.value
        })
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
                onChange={handleChange} />
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
    )
}