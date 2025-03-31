import React, { useState, useEffect, useReducer } from "react";
import { Task } from "./Task";
import { AddTask } from "./AddTask";

const list = [
  {
    id: 1,
    task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum.",
    completed: false,
  },
  {
    id: 2,
    task: "Task 2",
    completed: false,
  },
  {
    id: 3,
    task: "Task 3",
    completed: false,
  },
];

function taskReducer(tasks, action) {
  switch (action.type) {
    case "ADD": {
      let lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;
      return [
        ...tasks,
        {
          id: lastId + 1,
          task: action.tempTask.task,
          completed: false,
        },
      ];
    }
    case "COMPLETED":
      return tasks.map((task) =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      );
    case "DELETE":
      return tasks.filter((task) => task.id !== action.id);
    case "SET":
      return action.tasks;
    default:
      return tasks;
  }
}

export const Dashboard = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [showSideNav, setShowSideNav] = useState(false);
  const [tempTask, setTempTask] = useState({
    task: "",
    completed: false,
  });

  useEffect(() => {
    // Populate the task list when the component mounts
    dispatch({ type: "SET", tasks: list });
  }, []);

  const handleAddTask = (task) => {
    setTempTask({ ...tempTask, task: "" });
    dispatch({
      type: "ADD",
      tempTask: task,
    });
  };

  const handleDeleteTask = (id) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  const handleCompleteTask = (id) => {
    dispatch({
      type: "COMPLETED",
      id: id,
    });
  };

  const handleTaskChange = (e) => {
    setTempTask({ ...tempTask, task: e.target.value });
  };

  const handleTaskActions = {
    handleDeleteTask,
    handleCompleteTask,
    handleAddTask,
    handleTaskChange,
  };

  const handleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <div className="flex items-center p-3 text-white gap-2">
      <div
        className={`${showSideNav}s?'w-2/3':'w-0.5/10' border border-white rounded-xl`}
      >
        <section className="w-full flex items-center justify-center">
          <p>
            <span onClick={() => handleSideNav}>Icon</span>
          </p>
          {showSideNav && <h1 className="p-4">Side menu</h1>}
        </section>
      </div>
      <div
        className={` ${showSideNav}s?'w-2/3':'w-9.5/10' flex flex-col items-center rounded-xl gap-2`}
      >
        <section className="w-full flex justify-center border border-white rounded-xl">
          <h1 className="p-4">Dashboard</h1>
        </section>
        <section className="w-full flex flex-col items-center justify-center border border-white rounded-xl gap-2">
          <AddTask tempTask={tempTask} handleTaskActions={handleTaskActions} />
        </section>
        <section className="w-full border border-white rounded-xl">
          <Task tasks={tasks} handleTaskActions={handleTaskActions} />
        </section>
      </div>
    </div>
  );
};
