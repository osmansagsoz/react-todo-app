import css from "../app/app.module.css";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFireFlameCurved,
  faFire,
  faFireFlameSimple,
  faTag
} from "@fortawesome/free-solid-svg-icons";
import { useDropdown } from "../allLists/useDropdown";

const ExtraField = ({
  todoData,
  handleChange,
  closed,
  showTimeField,
  priClosed,
  showPriField,
  tagClosed,
  showTagField
}) => {
  //   const [closed, showTimeField] = useDropdown({ initialClosed: true });
  //   const [priClosed, showPriField] = useDropdown({ initialClosed: true });
  //   const [tagClosed, showTagField] = useDropdown({ initialClosed: true });

  return (
    <div className={css.extraField}>
      <div className={css.dateWrapper}>
        <button type="button" className={css.dateField} onClick={showTimeField}>
          Add time
        </button>
        <div className={cx(css.popper, !closed && css.popperOpen)}>
          <div className={css.timeForm}>
            <input
              type="text"
              name="time"
              placeholder="eg, 16:00"
              value={todoData.time}
              onChange={handleChange}
            />
            <button type="button" aria-label="Add selected time">
              +
            </button>
          </div>
        </div>
      </div>
      <div className={css.todoTags}>
        <div className={css.priWrapper}>
          <button
            type="button"
            className={css.priority}
            onClick={showPriField}
            aria-label="Set priority"
          >
            <FontAwesomeIcon icon={faFireFlameCurved} />
          </button>
          <div className={cx(css.priPopper, !priClosed && css.popperOpen)}>
            <ul>
              <li>
                <label htmlFor="pri1">
                  <input
                    type="radio"
                    id="pri1"
                    name="priority"
                    value="Priority 1"
                    checked={todoData.priority === "Priority 1"}
                    onChange={handleChange}
                  />
                  Priority 1 <FontAwesomeIcon icon={faFire} style={{ color: "#ffccd1" }} />
                </label>
              </li>
              <li>
                <label htmlFor="pri2">
                  <input
                    type="radio"
                    id="pri2"
                    name="priority"
                    value="Priority 2"
                    checked={todoData.priority === "Priority 2"}
                    onChange={handleChange}
                  />
                  Priority 2{" "}
                  <FontAwesomeIcon icon={faFireFlameCurved} style={{ color: "#ffc39e" }} />
                </label>
              </li>
              <li>
                <label htmlFor="pri3">
                  <input
                    type="radio"
                    id="pri3"
                    name="priority"
                    value="Priority 3"
                    checked={todoData.priority === "Priority 3"}
                    onChange={handleChange}
                  />
                  Priority 3{" "}
                  <FontAwesomeIcon icon={faFireFlameSimple} style={{ color: "#d6f1fe" }} />
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.tagWrapper}>
          <button
            type="button"
            className={css.listTag}
            onClick={showTagField}
            aria-label="Add list tag"
          >
            <FontAwesomeIcon icon={faTag} />
          </button>
          <div className={cx(css.tagPopper, !tagClosed && css.popperOpen)}>
            <input
              type="text"
              placeholder="Type a list tag"
              name="tag"
              value={todoData.tag}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className={css.submitButton}>Add Todo</button>
      </div>
    </div>
  );
};

export default ExtraField;
