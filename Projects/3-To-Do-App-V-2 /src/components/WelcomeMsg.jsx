import styles from "./WelcomeMsg.module.css";
import React from "react";
const WelcomeMsg = ({ toDoItems }) => {
  return (
    toDoItems.length === 0 && <p className={styles.welHead}>Enjoy Your Day</p>
  );
};

export default WelcomeMsg;
