import { useState } from "react";
import "./Task.css";
export default function Task(props) {
  const { addTask, deleteTask, moveTask, task } = props;
  const [collapsed, setCollapsed] = useState(task.isCollapsed);
  const [formAction, setFormAction] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (formAction === "save") {
      if (collapsed) {
        setCollapsed(false);
      } else {
        let newTask = {
          id: task.id,
          title: event.target.elements.title.value,
          date: event.target.elements.date.value,
          date1: event.target.elements.date1.value,
          time: event.target.elements.time.value,
          time1: event.target.elements.time.value,
          warehouse: event.target.elements.warehouse.value,
          package: event.target.elements.package.value,
          size: event.target.elements.size.value,
          mode: event.target.elements.mode.value,
          eta: event.target.elements.eta.value,
          status: task.status,
          isCollapsed: true,
        };

        addTask(newTask);
        setCollapsed(true);
      }
    }

    if (formAction === "delete") {
      deleteTask(task.id);
    }
  }

  function handleMoveLeft() {
    let newStatus = "";

    if (task.status === "In Progress") {
      newStatus = "Backlog";
    } else if (task.status === "Done") {
      newStatus = "In Progress";
    }

    if (newStatus !== "") {
      moveTask(task.id, newStatus);
    }
  }

  function handleMoveRight() {
    let newStatus = "";

    if (task.status === "Backlog") {
      newStatus = "In Progress";
    } else if (task.status === "In Progress") {
      newStatus = "Done";
    }

    if (newStatus !== "") {
      moveTask(task.id, newStatus);
    }
  }

  return (
    <div className={`task ${collapsed ? "collapsedTask" : ""}`}>
      <form onSubmit={handleSubmit} className={collapsed ? "collapsed" : ""}>
        <div className="upper">
          <button onClick={handleMoveLeft} className="button-moveTask1">
            &#171;
          </button>
          <button onClick={handleMoveRight} className="button-moveTask">
            &#187;
          </button>
          <div className="saves">
            <button
              onClick={() => {
                setFormAction("save");
              }}
              className="button"
            >
              {collapsed ? "Edit" : "Save"}
            </button>
            {collapsed && (
              <button
                onClick={() => {
                  setFormAction("delete");
                }}
                className="button-delete"
              >
                X
              </button>
            )}
          </div>
        </div>
        <div className="destine">
          <input
            type="text"
            className="title input"
            name="title"
            placeholder="Starting Point"
            disabled={collapsed}
            defaultValue={task.title}
          />
        </div>

        <div className="sched1">
          <div className="dates1">
            <input
              type="date"
              className="date input"
              name="date"
              disabled={collapsed}
              defaultValue={task.date}
            />
          </div>

          <input
            type="time"
            className="time input"
            name="time"
            disabled={collapsed}
            defaultValue={task.date}
          />
        </div>
        <div className="sched2">
          <div className="dates1">
            <input
              type="date"
              className="date1 input"
              name="date1"
              disabled={collapsed}
              defaultValue={task.date}
            />
          </div>
          <input
            type="time"
            className="time input"
            name="time1"
            disabled={collapsed}
            defaultValue={task.date}
          />
        </div>
        <div className="wareH">
          <input
            type="text"
            className="warehouse input"
            name="warehouse"
            placeholder="Destination"
            disabled={collapsed}
            defaultValue={task.warehouse}
          />
        </div>

        <div className="pack">
          <div className="pack1">
            <input
              type="text"
              className="package input"
              name="package"
              placeholder="Package"
              disabled={collapsed}
              defaultValue={task.package}
            />
          </div>
          <input
            type="text"
            className="size input"
            name="size"
            placeholder="Size"
            disabled={collapsed}
            defaultValue={task.size}
          />
        </div>
        <div className="transpo">
          <input
            type="text"
            className="mode input"
            name="mode"
            placeholder="Mode Transportation"
            disabled={collapsed}
            defaultValue={task.mode}
          />
        </div>
        <div className="arrival">
          <input
            type="text"
            className="eta input"
            name="eta"
            placeholder="ETA"
            disabled={collapsed}
            defaultValue={task.eta}
          />
        </div>
      </form>
    </div>
  );
}
