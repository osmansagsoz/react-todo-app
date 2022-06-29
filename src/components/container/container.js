import css from "../app/app.module.css";
import { Header } from "./header";
import { TodoArea } from "./todoArea";
import { useState } from "react";

export const Container = () => {
  const [closed, setClosed] = useState(true);
  function showTimeField() {
    setClosed((prev) => !prev);
  }
  console.log(closed);

  return (
    <section className={css.container}>
      <Header />
      <TodoArea closed={closed} showTimeField={showTimeField} />
    </section>
  );
};
