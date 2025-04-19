import React from "react";
import TodoItem from "./TodoItem";
import { TodoItemContext } from "../store/ToDoItems-Store";
import { useContext } from "react";

const ToDoItems = ({}) => {
  const { toDoItems } = useContext(TodoItemContext);
  return (
    <div className="todoitems" key={toDoItems.name}>
      {toDoItems.map((item) => (
        <TodoItem
          toDoDate={item.date}
          toDoItem={item.name}
          key={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default ToDoItems;
