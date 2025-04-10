import { MdDelete } from "react-icons/md";
function TodoItem({ toDoItem, toDoDate, onClickDeleteBtn }) {
  return (
    <div className="container">
      <div className="row myrow">
        <div className="col-6">{toDoItem} </div>
        <div className="col-4">{toDoDate} </div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger mybtn"
            onClick={() => onClickDeleteBtn(toDoItem)}
          >
            <MdDelete></MdDelete>
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
