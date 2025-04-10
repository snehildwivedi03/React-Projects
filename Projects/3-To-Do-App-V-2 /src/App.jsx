import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ToDoItems from "./components/ToDoItems";
import "./App.css";
import { useState } from "react";
function App() {
  const initialToDoItems = [
    {
      name: "Buy Coffee",
      date: "12/12/23",
    },
    {
      name: "Buy Milk",
      date: "12/12/23",
    },
  ];
  const [toDoItems, setToDoItems] = useState(initialToDoItems);
  const handleOnNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} - Date:${itemDueDate}`);
    const newToDoItem = [...toDoItems, { name: itemName, date: itemDueDate }];
    setToDoItems(newToDoItem);
  };
  return (
    <center className="todo-container">
      <AppName></AppName>

      <AddTodo onNewItem={handleOnNewItem}></AddTodo>
      <ToDoItems toDoItems={toDoItems}></ToDoItems>
    </center>
  );
}

export default App;
