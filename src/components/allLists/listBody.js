import { useState, useRef, useEffect } from 'react'
import css from '../app/app.module.css'
import ListItem from './listItem';

export const ListBody = (props) => {
  const [lists, setLists] = useState([]);
  const [listData, setListData] = useState({ listTitle: "", listId: "" });
  // const itemsRef = useRef([]);
  // console.log(itemsRef.current)

  // useEffect(() => {
  //   itemsRef.current = itemsRef.current.slice(0, lists.length);
  // }, [lists.length])
  // ref={el => itemsRef.current[i] = el}

  function listChange(e) {
    const {name, value} = e.target;
    setListData({
      ...listData,
      [name]: value
    })
  }
  function addList(list) {
    setLists([list, ...lists]);
  }
  function handleListSubmit(e) {
    e.preventDefault();
    addList({...listData, listId: `${Date.now()}`});
    setListData({...listData, listTitle: "", listId: ""});
  }
  console.log(listData.listTitle);
  console.log(lists);

    return (
        <div className={props.className}>
        <ul className={css.todoLists}>
          {lists.map((list, i) => {
            return <ListItem key={list.listId} listData={list} />
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
    )
}