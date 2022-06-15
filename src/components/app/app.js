import css from "./app.module.css";

console.log(css);
export const App = () => {
  return (
    <div className={css.container}>
      <header>
        <h1 className="title">React Todo App</h1>
      </header>
    </div>
  );
};
