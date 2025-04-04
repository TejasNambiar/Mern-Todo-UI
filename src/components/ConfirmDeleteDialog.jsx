import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

export const ConfirmDeleteDialog = ({ open, handleClose, handleConfirm }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className="flex rounded-xl items-center justify-center"
      slotProps={{
        paper: {
          className: "rounded-xl", // Add the rounded-xl class
          style: {
            width: "30vw", // Adjust the width as needed
            padding: "0", // Add padding for better spacingdisplay: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: 0, // Remove default margin
          },
        },
      }}
    >
      <DialogContent
        className="flex flex-col items-center justify-center w-full 
            bg-gradient-to-b from-darkCyan-200 to-darkCyan-900 rounded-xl p-0 m-0"
      >
        <DialogTitle className="text-center rounded-xl">
          Confirm Delete
        </DialogTitle>
        <DialogContent className="flex flex-col items-center justify-center w-full rounded-xl">
          <p>Are you sure you want to delete</p>
        </DialogContent>
        <DialogActions className="flex justify-center w-full rounded-xl">
          <button
            className="px-4 py-3 rounded-xl border shadow-lg border-darkCyan-700 
                            bg-gradient-to-b from-darkCyan-400 to-darkCyan-800
                            hover:border-darkCyan-900 hover:bg-gradient-to-b hover:from-darkCyan-500
                            hover:to-darkCyan-900"
            onClick={handleConfirm}
          >
            Yes
          </button>
          <button
            className="px-4 py-3 rounded-xl border shadow-lg border-darkCyan-700 
                            bg-gradient-to-b from-darkCyan-400 to-darkCyan-800
                            hover:border-darkCyan-900 hover:bg-gradient-to-b hover:from-darkCyan-500
                            hover:to-darkCyan-900"
            onClick={handleClose}
          >
            No
          </button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
