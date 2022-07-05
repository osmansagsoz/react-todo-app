import { useState, useRef, useEffect } from "react";
import css from "../app/app.module.css";
import ListItem from "./listItem";

export const ListBody = ({ className, listData, listChange, setListData }) => {
  const [lists, setLists] = useState([
    { listTitle: "Meetings", listId: "1", todos: [] },
    { listTitle: "Daily Routine", listId: "2", todos: [] },
    { listTitle: "Misc.", listId: "3", todos: [] }
  ]);
  // const itemsRef = useRef([]);
  // console.log(itemsRef.current)

  // useEffect(() => {
  //   itemsRef.current = itemsRef.current.slice(0, lists.length);
  // }, [lists.length])
  // ref={el => itemsRef.current[i] = el}

  function addList(list) {
    setLists([list, ...lists]);
  }
  function handleListSubmit(e) {
    e.preventDefault();
    addList({ ...listData, listId: `${Date.now()}` });
    setListData({ ...listData, listTitle: "", listId: "" });
  }
  console.log(listData.listTitle);
  console.log(lists);

  return (
    <div className={className}>
      <ul className={css.todoLists}>
        {lists.map((list, i) => {
          return <ListItem key={list.listId} listData={list} />;
        })}
      </ul>
      <form onSubmit={handleListSubmit}>
        <input
          type="text"
          name="listTitle"
          value={listData.listTitle}
          onChange={listChange}
          className={css.newList}
          placeholder="New list name"
          aria-label="New list name"
        />
        <button className={css.listButton} aria-label="Create new list">
          +
        </button>
      </form>
    </div>
  );
};
