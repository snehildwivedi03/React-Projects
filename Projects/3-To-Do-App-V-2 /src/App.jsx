import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import WelcomeMsg from "./components/WelcomeMsg";
import ToDoItems from "./components/ToDoItems";
import { TodoItemContext } from "./store/ToDoItems-Store";
import "./App.css";
import { useReducer, useState } from "react";

const toDoItemReducer = (currToDoItem, action) => {
  let newToDoItems = currToDoItem;
  if (action.type === "NEW_ITEM") {
    newToDoItems = [
      ...currToDoItem,
      { name: action.payload.itemName, date: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newToDoItems = currToDoItem.filter(
      (item) => item.name != action.payload.itemName
    );
  }

  return newToDoItems;
};

function App() {
  // const [toDoItems, setToDoItems] = useState([]);
  const [toDoItems, dispatchToDoItems] = useReducer(toDoItemReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchToDoItems(newItemAction);

    /* setToDoItems((currValue) => [
      ...currValue,
      { name: itemName, date: itemDueDate },
    ]);*/
  };
  const deleteCurrItem = (toDoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: toDoItemName,
      },
    };
    dispatchToDoItems(deleteItemAction);
    /* const newtoDoItem = toDoItems.filter((item) => item.name != toDoItemName);
    setToDoItems(newtoDoItem);*/
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
