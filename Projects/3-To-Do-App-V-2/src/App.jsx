import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ToDoItems from "./components/ToDoItems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Coffee",
      dueDate: "12/12/22",
    },
    {
      name: "Buy Milk",
      dueDate: "02/11/22",
    },
    {
      name: "Dinner",
      dueDate: "23/02/25",
    },
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>

      <AddTodo></AddTodo>
      <ToDoItems todoItems={todoItems}></ToDoItems>
    </center>
  );
}

export default App;
