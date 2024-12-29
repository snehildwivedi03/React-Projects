let todoitem = "But Coffee";
let tododate = "01/02/2025";

function TodoItem2() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">{todoitem} </div>
        <div class="col-4">{tododate} </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
