import css from "../app/app.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
    return (
        <header>
          <h1 className={css.title}>React Todo App</h1>
          <p className={css.headerP}>Add your first todo!</p>
          <div className={css.loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <FontAwesomeIcon icon={faCheckDouble} className={css.icon} />
        </header>
    )
}