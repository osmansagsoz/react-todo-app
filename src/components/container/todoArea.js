import css from "./container.module.css";
import ExtraField from "./extraField";
import { useDropdown } from "../allLists/useDropdown";
import { createTodo } from "../../services/todos";
import { useCallback } from "react";

export const TodoArea = ({ todoData, handleChange, setTodoData, tags, onTagCreated }) => {
  const [closed, showTimeField, setClosed] = useDropdown({ initialClosed: true });
  const [priClosed, showPriField, setPriClosed] = useDropdown({ initialClosed: true });
  const [tagClosed, showTagField, setTagClosed] = useDropdown({ initialClosed: true });

  const setTagId = useCallback(
    async (tagName) => {
      const relatedTag = tags.find((tag) => tag.name === tagName);
        console.log("relatedTag", relatedTag);
      if (relatedTag) {
        setTodoData({ ...todoData, tagId: relatedTag.id });
        console.log(todoData);
      } else {
        onTagCreated({ name: tagName });
        const newRelatedTag = tags.find((tag) => tag.name === tagName);
        console.log(newRelatedTag);
        setTodoData({ ...todoData, tagId: newRelatedTag.id });
      }
    },
    [onTagCreated, setTodoData, tags, todoData]
  );

  const handleSubmit = useCallback(
   async (e) => {
      e.preventDefault();
      if (todoData.title.trim()) {
        setTagId(todoData.tagName);
        createTodo({ ...todoData, id: Date.now() });
        setTodoData({
          ...todoData,
          title: "",
          completed: false,
          time: "",
          priority: "",
          tagId: "",
          tagName: ""
        });
        setClosed(true);
        setPriClosed(true);
        setTagClosed(true);
      }
    },
    [setClosed, setPriClosed, setTagClosed, setTagId, setTodoData, todoData]
  );

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
