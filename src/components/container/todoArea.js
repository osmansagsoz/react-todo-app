import css from "./container.module.css";
import ExtraField from "./extraField";
import { useDropdown } from "../allLists/useDropdown";
import { useCallback, useState } from "react";

export const TodoArea = ({ tags, onTagCreated, onTodoCreated }) => {
  const [closed, showTimeField, setClosed] = useDropdown({ initialClosed: true });
  const [priClosed, showPriField, setPriClosed] = useDropdown({ initialClosed: true });
  const [tagClosed, showTagField, setTagClosed] = useDropdown({ initialClosed: true });

  const [todoData, setTodoData] = useState({
    id: "",
    title: "",
    completed: false,
    time: "",
    priority: "",
    tagId: "",
    tagName: ""
  });

//   const setTagId = useCallback(
//     async (tagName) => {
//       const relatedTag = tags.find((tag) => tag.name === tagName);
//       console.log("relatedTag", relatedTag);
//       if (relatedTag) {
//         onTagIdChange({ ...todoData, tagId: relatedTag.id });
//         console.log(todoData);
//       } 
//     //   else {
//     //     onTagCreated({ name: tagName });
//     //     const newRelatedTag = tags.find((tag) => tag.name === tagName);
//     //     console.log(newRelatedTag);
//     //     setTodoData({ ...todoData, tagId: newRelatedTag.id });
//     //   }
//     },
//     [onTagIdChange, tags, todoData]
//   );

  const handleChange = useCallback(
    (event) => {
      const { name, value, type, checked } = event.target;

      setTodoData({
        ...todoData,
        [name]: type === "checkbox" ? checked : value
      });
    },
    [todoData]
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (todoData.title.trim()) {
        onTodoCreated(todoData);
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
    [onTodoCreated, setClosed, setPriClosed, setTagClosed, setTodoData, todoData]
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
