import { TodoItemContext } from "../store/ToDoItems-Store";
import styles from "./WelcomeMsg.module.css";
import React, { useContext } from "react";
const WelcomeMsg = ({}) => {
  const { toDoItems } = useContext(TodoItemContext);

  return (
    toDoItems.length === 0 && <p className={styles.welHead}>Enjoy Your Day</p>
  );
};

export default WelcomeMsg;
