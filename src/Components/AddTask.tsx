import { FC } from "react";
import "../index.css";
import { useGlobalContext } from "../../context/GlobalContextProvider";

const AddTask: FC = () => {
  const context = useGlobalContext();

  if (!context) {
    return <div>Error: Global context is not defined</div>;
  }

  const { handleChange, addTask, task, deadline } = context;

  return (
    <div className="app">
      <div className="container">
        <h1>Add new task</h1>
        <div>
          <h2>Title</h2>
          <input
            type="text"
            placeholder="Write your task..."
            onChange={handleChange}
            name="task"
            value={task}
          />
        </div>
        <div>
          <h2>Deadline</h2>
          <input
            type="number"
            placeholder="Deadline (in days)"
            onChange={handleChange}
            name="deadline"
            value={deadline}
          />
        </div>
        <button className="add-task-button" onClick={addTask}>
          Add new task
        </button>
      </div>
    </div>
  );
};

export default AddTask;
