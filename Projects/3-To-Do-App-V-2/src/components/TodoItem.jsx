function TodoItem({ tododate, todoitem }) {
  return (
    <div className="container">
      <div className="row myrow">
        <div className="col-6">{todoitem} </div>
        <div className="col-4">{tododate} </div>

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
