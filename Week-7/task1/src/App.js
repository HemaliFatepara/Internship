import React, { useState } from "react";
import "./App.css";

function Task({ task, index, completeTask, removeTask }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "underline" }}
    >
      {task.title}

      <button style={{ background: "red" }} onClick={() => removeTask(index)}>
        x
      </button>
      <button onClick={() => completeTask(index)}>
        {task.completed ? "Not Completed" : "Completed"}
      </button>
    </div>
  );
}

function CreateTask({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    <div className="task">
      <form>
        <input
          type="text"
          className="input"
          value={value}
          placeholder="Add a new task"
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleSubmit} className="btn">
          ADD
        </button>
      </form>
    </div>
  );
}

function Todo() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <CreateTask addTask={addTask} />
      <div className="tasks-container">
        <div className="tasks incomplete-tasks">
          <h2>Incomplete Tasks</h2>
          {incompleteTasks?.length > 0 ? (
            <div>
              {incompleteTasks.map((task, index) => (
                <Task
                  task={task}
                  index={index}
                  completeTask={completeTask}
                  removeTask={removeTask}
                  key={index}
                />
              ))}
            </div>
          ) : (
            <div className="empty">
              <p>No task found</p>
            </div>
          )}
        </div>
        <div className="tasks completed-tasks">
          <h2>Completed Tasks</h2>
          {completedTasks?.length > 0 ? (
            <div>
              {completedTasks.map((task, index) => (
                <Task
                  task={task}
                  index={index}
                  completeTask={completeTask}
                  removeTask={removeTask}
                  key={index}
                />
              ))}
            </div>
          ) : (
            <div className="empty">
              <p>No task found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
