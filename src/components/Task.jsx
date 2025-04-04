import React from "react";

export const Task = ({ tasks, handleTaskActions }) => {
  const { handleCompleteTask, handleOpenConfirm } = handleTaskActions;

  return (
    <ul className="list-disc list-inside space-y-4">
      {tasks?.map((task) => (
        <li
          key={task.id}
          className="relative flex items-center justify-between w-full p-2 pl-5 border
                     rounded-l-lg rounded-r-xl bg-black border-transparent hover:"
        >
          {/* w-[9.5px] ml-[-0.6px] h-9.8/10 */}
          <div className="absolute w-1.5 h-full top-0 bottom-0 left-0 bg-darkCyan-400 rounded-xl"></div>
          <div>
            <p className={`flex-grow ${task.completed ? "line-through" : ""}`}>
              <span onClick={() => handleCompleteTask(task.id)}>
                {task.task}
              </span>
            </p>
          </div>
          <div>
            <button
              className="px-2 py-3 rounded-xl border shadow-lg border-darkCyan-700 
                        bg-gradient-to-b from-darkCyan-400 to-darkCyan-800
                            hover:border-darkCyan-900 hover:bg-gradient-to-b hover:from-darkCyan-500
                            hover:to-darkCyan-900"
              onClick={() => handleOpenConfirm(task.id)}
            >
              delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
