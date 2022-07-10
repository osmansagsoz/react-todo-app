import css from "./allLists.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { ListBody } from "./listBody";
import { useDropdown } from "./useDropdown";

const AllLists = ({ onSelectedTagChange, onTagCreated, selectedTag, tags }) => {
  const [closed, toggleLists] = useDropdown({ initialClosed: true });

  return (
    <section className={css.allLists}>
      <button className={css.listsButton} onClick={toggleLists}>
        <FontAwesomeIcon icon={faList} />
        <h3 className={css.todoListsTitle}>My Lists</h3>
      </button>
      <ListBody
        className={closed ? css.dropdown : css.dropdownOpen}
        onSelectedTagChange={onSelectedTagChange}
        onTagCreated={onTagCreated}
        selectedTag={selectedTag}
        tags={tags}
      />
    </section>
  );
};

export default AllLists;
