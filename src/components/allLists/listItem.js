import { useRef, useState } from "react";
import css from "../app/app.module.css";

const ListItem = ({ listData }) => {
  const [isCurrentListItem, setIsCurrentListItem] = useState(false);
//   const [currentListItem, setCurrentListItem] = useState("");

  function handleListClick(e) {
    // setCurrentListItem(e.target)
    console.log(e.target)
    // currentListItem === this ? setIsCurrentListItem(true): setIsCurrentListItem(false)
    // currentListItem === itemsRef.current ? setIsCurrentListItem(true) : setIsCurrentListItem(false)
    setIsCurrentListItem(true);
  }

  return (
    <li onClick={handleListClick} className={isCurrentListItem ? css.activeList : null}>
      {listData.listTitle}
    </li>
  );
};

export default ListItem;
