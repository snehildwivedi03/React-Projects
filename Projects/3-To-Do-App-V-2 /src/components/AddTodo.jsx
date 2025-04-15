import { useState } from "react";
import { GrChapterAdd } from "react-icons/gr";
function AddTodo({ onNewItem }) {
  const [toDoName, setToDoName] = useState("");
  const [toDoDate, setToDoDate] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const handleNameChange = (event) => {
    setToDoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setToDoDate(event.target.value);
  };

  const handleAddBtnClick = () => {
    if (toDoName.trim() === "" || toDoDate.trim() === "") {
      setErrMsg("Please enter a valid name and date");
      return;
    }

    onNewItem(toDoName, toDoDate);

    setToDoDate("");
    setToDoName("");
    setErrMsg("");
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
            <GrChapterAdd />
          </button>
        </div>
      </div>
      {/* {Error Message} */}
      {errMsg && (
        <div className="row mt 2">
          <div className="col text-danger">{errMsg}</div>
        </div>
      )}
    </div>
  );
}
export default AddTodo;
