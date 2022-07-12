import { Loader } from "../loader/loader";
import css from "./container.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

export const Header = ({ appState }) => {
    return (
        <header>
          <h1 className={css.title}>React Todo App</h1>
          <p className={css.headerP}>{appState}</p>
          {appState === "Loading" ? <Loader /> : null}
          <FontAwesomeIcon icon={faCheckDouble} className={css.icon} />
        </header>
    )
}