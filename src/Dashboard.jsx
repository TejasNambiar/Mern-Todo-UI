import React, { useState, useEffect, useReducer } from "react";
import { Task } from "./components/Task";
import { AddTask } from "./components/AddTask";
import { Dialog } from "@mui/material";
import { ConfirmDeleteDialog } from "./components/ConfirmDeleteDialog";
import {
  list,
  taskReducer,
  handleAddTask,
  handleDeleteTask,
  handleCompleteTask,
  handleTaskChange,
  handleClickOpen,
  handleClose,
} from "./Utils/taskUtils";
// import { ReactComponent as Svg1 } from './assets/menu.svg';
// import { ReactComponent as Svg2 } from './assets/setting.svg';

export const Dashboard = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [tempTask, setTempTask] = useState({
    task: "",
    completed: false,
  });

  useEffect(() => {
    // Populate the task list when the component mounts
    dispatch({ type: "SET", tasks: list });
  }, []);

  const handleOpenConfirm = (taskId) => {
    setTaskToDelete(taskId);
    setConfirmOpen(true);
  };

  const handleCloseConfirm = () => {
    setConfirmOpen(false);
    setTaskToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (taskToDelete !== null) {
      handleDeleteTask(taskToDelete);
    }
    handleCloseConfirm();
  };

  const handleTaskActions = {
    handleCompleteTask: handleCompleteTask(dispatch),
    handleAddTask: handleAddTask(dispatch, setTempTask, handleClose(setOpen)),
    handleTaskChange: handleTaskChange(setTempTask),
    handleClose: handleClose(setOpen),
    handleOpenConfirm,
  };

  return (
    <div className="flex items-center p-3 text-white gap-2">
      <div
        className={` ${false}s?'w-2/3':'w-9.5/10' flex flex-col items-center rounded-xl gap-2`}
      >
        <section className="w-full flex items-center justify-between border border-darkCyan-400 rounded-xl">
          <span className="ml-2">
            <svg
              class="fill-darkCyan-200 hover:fill-darkCyan-400"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </span>
          <h1 className="p-4">Dashboard</h1>
          <span className="mr-2">
            <svg
              class="fill-darkCyan-200 hover:fill-darkCyan-400"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path
                d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119
            50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 
            78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 
            7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 
            8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 
            0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"
              />
            </svg>
          </span>
        </section>
        <section className="w-full flex justify-items-end flex-row-reverse items-center rounded-xl gap-2">
          <button
            className="mt-3 mr-4 mb-3 px-4 py-3 rounded-xl border shadow-lg border-darkCyan-700 
            bg-gradient-to-b from-darkCyan-400 to-darkCyan-800
          hover:border-darkCyan-900 hover:bg-gradient-to-b hover:from-darkCyan-500
          hover:to-darkCyan-900"
            onClick={handleClickOpen(setOpen)}
          >
            Add Task
          </button>
        </section>
        <Dialog
          open={open}
          onClose={handleClose(setOpen)}
          className="flex rounded-xl items-center justify-center"
          slotProps={{
            paper: {
              style: {
                width: "50vw", // 50% of the viewport width
                height: "50vh", // 50% of the viewport height
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 0, // Remove default padding
                margin: 0, // Remove default margin
              },
            },
          }}
        >
          <AddTask tempTask={tempTask} handleTaskActions={handleTaskActions} />
        </Dialog>
        <ConfirmDeleteDialog
          open={confirmOpen}
          handleClose={handleCloseConfirm}
          handleConfirm={handleConfirmDelete}
        />
        <section className="w-full">
          <Task tasks={tasks} handleTaskActions={handleTaskActions} />
        </section>
      </div>
    </div>
  );
};
