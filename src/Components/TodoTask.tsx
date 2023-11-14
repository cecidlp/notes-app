import { ITask } from "../context/GlobalContextProvider";

interface Props {
  task: ITask;
  onComplete: () => void;
}

const TodoTask = ({ task, onComplete }: Props) => {
  return (
    <div className="task-container">
      <div>
        <h2>Task:</h2>
        <p>{task.taskName}</p>
        <h2>Days till deadline:</h2>
        <p>{task.deadline}</p>
      </div>

      <button className="delete-button" onClick={onComplete}>
        Delete
      </button>
    </div>
  );
};

export default TodoTask;
