import { createContext } from "react";
export const TodoItemContext = createContext({
  toDoItems: [],
  addNewItem: () => {},
  deleteCurrItem: () => {},
});
