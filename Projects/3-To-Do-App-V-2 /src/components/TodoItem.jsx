function TodoItem({ toDoItem, toDoDate }) {
  return (
    <div className="container">
      <div className="row myrow">
        <div className="col-6">{toDoItem} </div>
        <div className="col-4">{toDoDate} </div>

        <div className="col-2">
          <button type="button" className="btn btn-danger mybtn">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
