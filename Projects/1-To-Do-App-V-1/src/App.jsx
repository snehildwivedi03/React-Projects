function App() {
  return (
    <center className="todo-container">
      <h1>TODO App</h1>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter todo here" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div class="container text-center">
        <div class="row">
          <div class="col-6">Buy Milk </div>
          <div class="col-4">21/12/2024 </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Remove
            </button>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div class="container text-center">
        <div class="row">
          <div class="col-6">Buy Protein </div>
          <div class="col-4">02/01/2025 </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Remove
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
