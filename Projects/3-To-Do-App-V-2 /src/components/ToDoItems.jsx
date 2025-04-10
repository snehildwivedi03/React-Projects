import React from "react";
import TodoItem from "./TodoItem";
const ToDoItems = ({ toDoItems, onClickDeleteBtn }) => {
  return (
    <div className="todoitems" key={toDoItems.name}>
      {toDoItems.map((item) => (
        <TodoItem
          toDoDate={item.date}
          toDoItem={item.name}
          key={item.name}
          onClickDeleteBtn={onClickDeleteBtn}
        ></TodoItem>
      ))}
    </div>
  );
};

export default ToDoItems;
