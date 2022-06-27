import css from '../app/app.module.css'

export const ListBody = (props) => {
    return (
        <div className={props.className}>
        <ul className={css.todoLists}>
          <li className={css.activeList}>Meetings</li>
          <li>Daily Routine</li>
          <li>Grocery</li>
          <li>Grocery</li>
          <li>Grocery</li>
          <li>Grocery</li>
          <li>Grocery</li>
        </ul>
        <form>
          <input
            type="text"
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