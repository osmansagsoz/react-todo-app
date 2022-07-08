import { useState, useCallback } from "react";
import css from "../app/app.module.css";
import { Loader } from "../loader/loader";
import ListItem from "./listItem";

export const ListBody = ({ className, onSelectedTagChange, onTagCreated, selectedTag, tags }) => {
  const [newTag, setNewTag] = useState("");

  const onNewTagChange = useCallback((event) => setNewTag(event.target.value), []);

  const handleListSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const newTagName = newTag.trim(); // "  asdas  " => "asdas"
      if (newTagName) {
        onTagCreated({ name: newTagName });
        setNewTag("");
      }
    },
    [newTag, onTagCreated]
  );

  return (
    <div className={className}>
      {tags ? (
        <ul className={css.todoLists}>
          {tags.map((tag) => (
            <ListItem
              key={tag.id}
              onSelectedTagChange={onSelectedTagChange}
              selectedTag={selectedTag}
              tag={tag}
            />
          ))}
        </ul>
      ) : (
        <Loader />
      )}
      <form onSubmit={handleListSubmit}>
        <input
          type="text"
          name="listTitle"
          value={newTag}
          onChange={onNewTagChange}
          className={css.newList}
          placeholder="New list name"
          aria-label="New list name"
        />
        <button className={css.listButton} aria-label="Create new list" type="submit">
          +
        </button>
      </form>
    </div>
  );
};
