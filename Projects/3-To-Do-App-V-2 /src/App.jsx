import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import WelcomeMsg from "./components/WelcomeMsg";
import ToDoItems from "./components/ToDoItems";
import { TodoItemContext } from "./store/ToDoItems-Store";
import "./App.css";
import { useState } from "react";
function App() {
  const [toDoItems, setToDoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setToDoItems((currValue) => [
      ...currValue,
      { name: itemName, date: itemDueDate },
    ]);
  };
  const deleteCurrItem = (toDoItemName) => {
    const newtoDoItem = toDoItems.filter((item) => item.name != toDoItemName);
    setToDoItems(newtoDoItem);
  };
  return (
    <TodoItemContext.Provider
      value={{
        toDoItems,
        addNewItem,
        deleteCurrItem,
      }}
    >
      <center className="todo-container">
        <AppName></AppName>

        <AddTodo></AddTodo>
        <WelcomeMsg></WelcomeMsg>
        <ToDoItems></ToDoItems>
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
