import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemContext } from "../store/ToDoItems-Store";
function TodoItem({ toDoItem, toDoDate, onClickDeleteBtn }) {
  const { deleteCurrItem } = useContext(TodoItemContext);
  return (
    <div className="container">
      <div className="row myrow">
        <div className="col-6">{toDoItem} </div>
        <div className="col-4">{toDoDate} </div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger mybtn"
            onClick={() => deleteCurrItem(toDoItem)}
          >
            <MdDelete></MdDelete>
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
