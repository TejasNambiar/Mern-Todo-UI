import React from "react";

export const AddTask = ({ tempTask, handleTaskActions }) => {
  const { handleAddTask, handleTaskChange } = handleTaskActions;
  return (
    <>
      <h1>Add Task</h1>
      <section className="flex w-full justify-between m-px-2">
        <textarea
          className="w-9/10 border border-white rounded-xl ml-3 mb-3"
          placeholder="Enter Task"
          value={tempTask.task}
          onChange={handleTaskChange}
        />
        <button
          className="mr-4 mb-3 px-4 py-3 rounded-xl border shadow-lg border-darkCyan-700 
              bg-gradient-to-b from-darkCyan-400 to-darkCyan-600
            hover:border-darkCyan-900 hover:bg-gradient-to-b hover:from-darkCyan-600 hover:to-darkCyan-800"
          onClick={() => handleAddTask(tempTask)}
        >
          Add
        </button>
      </section>
    </>
  );
};
