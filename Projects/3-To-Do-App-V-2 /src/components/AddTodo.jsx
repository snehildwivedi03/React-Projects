import { useState, useRef } from "react";
import { GrChapterAdd } from "react-icons/gr";
function AddTodo({ onNewItem }) {
  const [errMsg, setErrMsg] = useState("");

  const toDoNameRef = useRef();
  const dueDateRef = useRef();

  const handleAddBtnClick = (event) => {
    event.preventDefault();
    const toDoName = toDoNameRef.current.value;
    const toDoDate = dueDateRef.current.value;
    toDoNameRef.current.value = "";
    dueDateRef.current.value = "";

    if (toDoName.trim() === "" || toDoDate.trim() === "") {
      setErrMsg("Please enter a valid name and date");
      return;
    }

    onNewItem(toDoName, toDoDate);

    setErrMsg("");
  };

  return (
    <div className="container text-center">
      <form className="row myrow" onSubmit={handleAddBtnClick}>
        <div className="col-6">
          <input ref={toDoNameRef} type="text" placeholder="Enter todo here" />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateRef} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success mybtnadd">
            <GrChapterAdd />
          </button>
        </div>
      </form>
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
