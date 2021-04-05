import Task from "./Task";
import "./StatusLine.css";
export default function StatusLine(props) {
  const { status, tasks, addTask, deleteTask, addEmptyTask, moveTask } = props;

  let taskList, tasksForStatus;

  function handleAddEmpty() {
    addEmptyTask(status);
  }

  if (tasks) {
    tasksForStatus = tasks.filter((task) => {
      return task.status === status;
    });
  }

  if (tasksForStatus) {
    taskList = tasksForStatus.map((task) => {
      return (
        <Task
          addTask={(task) => addTask(task)}
          deleteTask={(id) => deleteTask(id)}
          moveTask={(id, status) => moveTask(id, status)}
          key={task.id}
          task={task}
        />
      );
    });
  }

  return (
    <div className="statusLine">
      <h3>{status}</h3>
      {taskList}
      <button onClick={handleAddEmpty} className="button-add">
        <img src="https://anima-uploads.s3.amazonaws.com/projects/6052d14aa1a93645d2c76b5d/releases/6058c2b68a1478626e8615e5/img/vector-2@2x.svg" />
        <span>Add Schedule Manually</span>
      </button>
    </div>
  );
}
