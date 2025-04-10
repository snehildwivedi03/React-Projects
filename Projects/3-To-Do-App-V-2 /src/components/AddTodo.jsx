import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [toDoName, setToDoName] = useState();
  const [toDoDate, setToDoDate] = useState();

  const handleNameChange = (event) => {
    setToDoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setToDoDate(event.target.value);
  };

  const handleAddBtnClick = () => {
    onNewItem(toDoName, toDoDate);
    setToDoDate("");
    setToDoName("");
  };

  return (
    <div className="container text-center">
      <div className="row myrow">
        <div className="col-6">
          <input
            type="text"
            value={toDoName}
            placeholder="Enter todo here"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={toDoDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success mybtnadd"
            onClick={handleAddBtnClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
