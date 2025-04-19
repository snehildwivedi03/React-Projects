import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import WelcomeMsg from "./components/WelcomeMsg";
import ToDoItems from "./components/ToDoItems";
import ToDoItemsContextProvider from "./store/ToDoItems-Store";
import "./App.css";

function App() {
  // const [toDoItems, setToDoItems] = useState([]);

  return (
    <ToDoItemsContextProvider>
      <center className="todo-container">
        <AppName></AppName>

        <AddTodo></AddTodo>
        <WelcomeMsg></WelcomeMsg>
        <ToDoItems></ToDoItems>
      </center>
    </ToDoItemsContextProvider>
  );
}

export default App;
