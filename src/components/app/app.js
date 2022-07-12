import css from "./app.module.css";
import AllLists from "../allLists/allLists";
import { Container } from "../container/container";
import Footer from "../footer/footer";
import TodoListArea from "../todoListArea/todoListArea";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createTag, getAllTags } from "../../services/tags";
import { getTodos } from "../../services/todos";
import useTodoData from "../../hooks/useTodoData";

// console.log(css);
export const App = () => {
  const [tags, setTags] = useState();
  const [tagsError, setTagsError] = useState(false);
  const [appState, setAppState] = useState("");

  const [selectedTag, setSelectedTag] = useState({});

  const [selectedTagTodos, setSelectedTagTodos] = useState();

  const [todoData, handleChange, setTodoData] = useTodoData();

  const handleAppState = useMemo(() => {
    // This is for checking the status of a request
    // Can be used both for tags, and selectedTagTodos
    if (tagsError) {
      // show error
      setAppState("There was an error!");
    } else if (tags === undefined) {
      // loading
      setAppState("Loading");
    } else if (tags.length === 0) {
      // empty
      setAppState("There are no tags!");
    } else if (tags.length > 0) {
      // have data
      setAppState("Tags data loaded!");
    }
  }, [tags, tagsError]);

  const onTagCreated = useCallback(async ({ name }) => {
    // Handle errors with try & catch here!
    try {
      const data = await createTag({ name });
      setTags((prevTags) => [...prevTags, data]);
    } catch (err) {
      setTagsError(true);
      console.log(err);
    }
  }, []);

  const onSelectedTagChange = useCallback(
    (nextSelectedTag) => {
      const tagIndex = tags.findIndex((tag) => tag.id === nextSelectedTag.id);
      if (tagIndex > -1) {
        setSelectedTag(nextSelectedTag);
      }
    },
    [tags]
  );

  //   const onSelectedTodoChange = useCallback(
  //     (e) => {
  //         const {name, value, type, checked} = e.target;

  //         setSelectedTagTodos((prevTodos => {
  //             prevTodos.find(todo => )
  //             // [name]: type === "checkbox" ? checked : value
  //         }))

  //     }, []
  //   )

  useEffect(() => {
    getAllTags()
      .then((data) => {
        // Set local tags in state
        setTags(data);
        // If we have tags, set initial selected tag
        if (data.length) {
          setSelectedTag(data[0]);
        }
      })
      .catch((e) => {
        // Update state if there's an error while loading tags
        setTagsError(true);
      });
  }, []);

  useEffect(() => {
    if (selectedTag !== undefined) {
      getTodos(selectedTag.id).then((data) => {
        setSelectedTagTodos(data);
      });
    }
  }, [selectedTag]);

  console.log("tags", tags);
  console.log("selectedTag", selectedTag);
  console.log("selectedTagTodos", selectedTagTodos);

  return (
    <div className={css.app}>
      <AllLists
        onSelectedTagChange={onSelectedTagChange}
        onTagCreated={onTagCreated}
        selectedTag={selectedTag}
        tags={tags}
      />
      <Container
        todoData={todoData}
        handleChange={handleChange}
        setTodoData={setTodoData}
        tags={tags}
        onTagCreated={onTagCreated}
        appState={appState}
      />
      <TodoListArea
        todos={selectedTagTodos}
        todoData={todoData}
        handleChange={handleChange}
        selectedTag={selectedTag}
      />
      <Footer />
    </div>
  );
};
