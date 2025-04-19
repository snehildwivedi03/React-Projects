import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemContext = createContext({
  toDoItems: [],
  addNewItem: () => {},
  deleteCurrItem: () => {},
});
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
const ToDoItemsContextProvider = ({ children }) => {
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
  };

  const deleteCurrItem = (toDoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: toDoItemName,
      },
    };
    dispatchToDoItems(deleteItemAction);
  };
  return (
    <TodoItemContext.Provider
      value={{
        toDoItems,
        addNewItem,
        deleteCurrItem,
      }}
    >
      {children}
    </TodoItemContext.Provider>
  );
};
export default ToDoItemsContextProvider;
