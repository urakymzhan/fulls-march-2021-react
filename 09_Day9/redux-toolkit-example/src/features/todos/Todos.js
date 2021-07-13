import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, selectTodo } from "./todosSlice";
import styles from './Todos.module.css';

export function Todos() {
  const [userInput, setUserInput] = useState("");

  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addTodo(userInput));
  };
  return (
    <div className={styles.row}>
      <form onSubmit={submitForm}>
        <input
        className={styles.textbox}
          type="text"
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Add todo"
        />
        <button type="submit" className={styles.button}>Add</button>
      </form>
      <div>
        {todos.map((todo, idx) => {
          return <p key={idx}>{todo}</p>;
        })}
      </div>
    </div>
  );
}
