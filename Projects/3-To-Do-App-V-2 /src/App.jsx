import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import WelcomeMsg from "./components/WelcomeMsg";
import ToDoItems from "./components/ToDoItems";
import "./App.css";
import { useState } from "react";
function App() {
  const [toDoItems, setToDoItems] = useState([]);
  const handleOnNewItem = (itemName, itemDueDate) => {
    const newToDoItem = [...toDoItems, { name: itemName, date: itemDueDate }];
    setToDoItems(newToDoItem);
  };
  const handleDeleteItem = (toDoItemName) => {
    const newtoDoItem = toDoItems.filter((item) => item.name != toDoItemName);
    setToDoItems(newtoDoItem);
  };
  return (
    <center className="todo-container">
      <AppName></AppName>

      <AddTodo onNewItem={handleOnNewItem}></AddTodo>
      {toDoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <ToDoItems
        toDoItems={toDoItems}
        onClickDeleteBtn={handleDeleteItem}
      ></ToDoItems>
    </center>
  );
}

export default App;
