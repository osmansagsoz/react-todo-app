import css from "../app/app.module.css";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFireFlameCurved,
  faFire,
  faFireFlameSimple,
  faTag
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import { useDropdown } from "../allLists/useDropdown";
import useTodoData from "../../hooks/useTodoData";

const ExtraField = (props) => {
  //   const [closed, showTimeField] = useDropdown({ initialClosed: true });
  //   const [closed, setClosed] = useState(true)
  const [todoData, handleChange] = useTodoData();
  //   console.log(closed)

  //   function showTimeField() {
  //     setClosed(prev => !prev)
  //   }

  return (
    <div className={css.extraField}>
      <div className={css.dateWrapper}>
        <button className={css.dateField} onClick={props.toggle}>
          Add time
        </button>
        <div className={cx(css.popper, !props.close && css.popperOpen)}>
          <div className={css.timeForm}>
            <input
              type="text"
              name="time"
              placeholder="eg, 16:00"
              value={todoData.time}
              onChange={handleChange}
            />
            <button aria-label="Add selected time">+</button>
          </div>
        </div>
      </div>
      <div className={css.todoTags}>
        <div className={css.priWrapper}>
          <button className={css.priority} aria-label="Set priority">
            <FontAwesomeIcon icon={faFireFlameCurved} />
          </button>
          <div className={css.priPopper}>
            <ul>
              <li>
                <label htmlFor="pri1">
                  <input type="radio" id="pri1" />
                  Priority 1{" "}
                  <FontAwesomeIcon icon={faFireFlameSimple} style={{ color: "#d6f1fe" }} />
                </label>
              </li>
              <li>
                <label htmlFor="pri2">
                  <input type="radio" id="pri2" />
                  Priority 2{" "}
                  <FontAwesomeIcon icon={faFireFlameCurved} style={{ color: "#ffc39e" }} />
                </label>
              </li>
              <li>
                <label htmlFor="pri3">
                  <input type="radio" id="pri3" />
                  Priority 3 <FontAwesomeIcon icon={faFire} style={{ color: "#ffccd1" }} />
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.tagWrapper}>
          <button className={css.listTag} aria-label="Add list tag">
            <FontAwesomeIcon icon={faTag} />
          </button>
          <div className={css.tagPopper}>
            <input type="text" placeholder="Type a list tag" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraField;
