import TodoItem from "./TodoItem";
import styles from "./ToDoItems.module.css";
const ToDoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles.todoitems}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            tododate={item.dueDate}
            todoitem={item.name}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};
export default ToDoItems;
