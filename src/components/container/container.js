import css from "../app/app.module.css";
import { Header } from "./header";
import { TodoArea } from "./todoArea";
import { useState } from "react";

export const Container = (props) => {
  return (
    <section className={css.container}>
      <Header />
      <TodoArea addTodo={props.addTodo}/>
    </section>
  );
};
