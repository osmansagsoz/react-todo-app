import { useCallback } from "react";
import css from "./allLists.module.css";

const ListItem = ({ onSelectedTagChange, selectedTag, tag }) => {
  const handleListClick = useCallback(() => {
    onSelectedTagChange(tag.id);
  }, [onSelectedTagChange, tag.id]);

  return (
    <li onClick={handleListClick} className={selectedTag === tag.id ? css.activeList : null}>
      {tag.name}
    </li>
  );
};

export default ListItem;
