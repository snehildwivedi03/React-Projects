import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ToDoItems from "./components/ToDoItems";
import "./App.css";
function App() {
  const toDoItems = [
    {
      name: "Buy Coffee",
      date: "12/12/23",
    },
    {
      name: "Buy Milk",
      date: "12/12/23",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>

      <AddTodo></AddTodo>
      <ToDoItems toDoItems={toDoItems}></ToDoItems>
    </center>
  );
}

export default App;
