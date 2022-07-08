import css from "./app.module.css";
import AllLists from "../allLists/allLists";
import { Container } from "../container/container";
import Footer from "../footer/footer";
import TodoListArea from "../todoListArea/todoListArea";
import { useCallback, useEffect, useState } from "react";
import TodoList from "../todoListArea/todoList";
import useListData from "../../hooks/useListData";
import useTodoData from "../../hooks/useTodoData";
import { createTag, getAllTags } from "../../services/tags";
import { getTodos } from "../../services/todos";

// console.log(css);
export const App = () => {
  const [tags, setTags] = useState();
  const [tagsError, setTagsError] = useState(false);

  const [selectedTag, setSelectedTag] = useState();

  const [selectedTagTodos, setSelectedTagTodos] = useState();

  const onTagCreated = useCallback(async ({ name }) => {
    // Handle errors with try & catch here!
    const data = await createTag({ name });
    setTags((prevTags) => [...prevTags, data]);
  }, []);

  const onSelectedTagChange = useCallback(
    (nextSelectedTag) => {
      const tagIndex = tags.findIndex((tag) => tag.id === nextSelectedTag);
      if (tagIndex > -1) {
        setSelectedTag(nextSelectedTag);
      }
    },
    [tags]
  );

  useEffect(() => {
    getAllTags()
      .then((data) => {
        // Set local tags in state
        setTags(data);

        // If we have tags, set initial selected tag
        if (data.length) {
          setSelectedTag(data[0].id);
        }
      })
      .catch((e) => {
        // Update state if there's an error while loading tags
        setTagsError(true);
      });
  }, []);

  useEffect(() => {
    if (selectedTag !== undefined) {
      getTodos(selectedTag).then((data) => {
        setSelectedTagTodos(data);
      });
    }
  }, [selectedTag]);

  // This is for checking the status of a request
  // Can be used both for tags, and selectedTagTodos
  if (tagsError) {
    // show error
  } else if (tags === undefined) {
    // loading
  } else if (tags.length === 0) {
    // empty
  } else if (tags.length > 0) {
    // have data
  }

  console.log("tags", tags);
  console.log("selectedTag", selectedTag);
  console.log("selectedTagTodos", selectedTagTodos);

  // const [listData, listChange, setListData] = useListData();
  // const [todoData, handleChange, setTodoData] = useTodoData();
  // const [todos, setTodos] = useState(listData.todos);

  // const addTodo = (todo) => {
  //   if(!todoData.tag) {

  //   }
  //   if (listData.listTitle === todoData.tag) {
  //     setTodos([todo, ...todos]);
  //     // console.log(todos)
  //   } else {

  //   }
  // };

  // const renderList = () => {
  //   return <TodoList />;
  // };

  // console.log(todos);

  return (
    <div className={css.app}>
      <AllLists
        onSelectedTagChange={onSelectedTagChange}
        onTagCreated={onTagCreated}
        selectedTag={selectedTag}
        tags={tags}
      />
      {/* <Container
        addTodo={addTodo}
        todoData={todoData}
        handleChange={handleChange}
        setTodoData={setTodoData}
      /> */}
      <TodoListArea todos={selectedTagTodos} />
      <Footer />
    </div>
  );
};
