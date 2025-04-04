import React from "react";
import "./AddTask.css"; // Import the CSS file
import { DialogActions, DialogContent, DialogTitle } from "@mui/material";

export const AddTask = ({ tempTask, handleTaskActions }) => {
  const { handleAddTask, handleTaskChange, handleClose } = handleTaskActions;
  return (
    <DialogContent
      className="flex flex-col items-center justify-center w-full 
    bg-gradient-to-b from-darkCyan-200 to-darkCyan-900 rounded-xl p-0 m-0"
    >
      <DialogTitle className="text-center rounded-xl">Add Task</DialogTitle>
      <DialogContent className="flex flex-col items-center justify-center w-full rounded-xl">
        <textarea
          className="w-full h-40 rounded-xl shadow-right gradient-border"
          placeholder="Enter Task"
          value={tempTask.task}
          onChange={handleTaskChange}
        />
      </DialogContent>
      <DialogActions className="flex justify-center w-full rounded-xl">
        <button
          className="mr-4 mb-3 px-4 py-3 rounded-xl border shadow-lg border-darkCyan-700 
          bg-gradient-to-b from-darkCyan-400 to-darkCyan-800
        hover:border-darkCyan-900 hover:bg-gradient-to-b hover:from-darkCyan-500
        hover:to-darkCyan-900"
          onClick={handleClose}
        >
          Cancel
        </button>
        <button
          className="mr-4 mb-3 px-4 py-3 rounded-xl border shadow-lg border-darkCyan-700 
          bg-gradient-to-b from-darkCyan-400 to-darkCyan-800
        hover:border-darkCyan-900 hover:bg-gradient-to-b hover:from-darkCyan-500
        hover:to-darkCyan-900"
          onClick={() => handleAddTask(tempTask)}
        >
          Add
        </button>
      </DialogActions>
    </DialogContent>
  );
};
