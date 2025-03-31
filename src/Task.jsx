import React from "react";

export const Task = ({ tasks, handleTaskActions }) => {
  const { handleDeleteTask, handleCompleteTask } = handleTaskActions;

  return (
    <ul className="list-disc p-4 list-inside space-y-4">
      {tasks?.map((task) => (
        <li key={task.id} className="flex items-center w-full">
          <p className={`flex-grow ${task.completed ? "line-through" : ""}`}>
            <span onClick={() => handleCompleteTask(task.id)}>{task.task}</span>
          </p>
          <button
            className="px-2 py-3 rounded-xl border shadow-lg border-darkCyan-700 
                    bg-gradient-to-b from-darkCyan-400 to-darkCyan-600
                    hover:border-darkCyan-900 hover:bg-gradient-to-b hover:from-darkCyan-600 hover:to-darkCyan-800"
            onClick={() => handleDeleteTask(task.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
