import css from "../app/app.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { ListBody } from "./listBody";
import { useDropdown } from "./useDropdown";

const AllLists = () => {
    const [closed, toggleLists] = useDropdown({initialClosed: true})

  return (
    <section className={css.allLists}>
      <button className={css.listsButton} onClick={toggleLists}>
        <FontAwesomeIcon icon={faList} />
        <h3 className={css.todoListsTitle}>My Lists</h3>
      </button>
      <ListBody className={closed ? css.dropdown : css.dropdownOpen} />
    </section>
  );
};

export default AllLists;

