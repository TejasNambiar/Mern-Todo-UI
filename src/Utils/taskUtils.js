export const list = [
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

export function taskReducer(tasks, action) {
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

export const handleAddTask = (dispatch, setTempTask, handleClose) => (task) => {
  setTempTask({ task: "" });
  dispatch({
    type: "ADD",
    tempTask: task,
  });
  handleClose();
};

export const handleDeleteTask = (dispatch) => (id) => {
  dispatch({
    type: "DELETE",
    id: id,
  });
};

export const handleCompleteTask = (dispatch) => (id) => {
  dispatch({
    type: "COMPLETED",
    id: id,
  });
};

export const handleTaskChange = (setTempTask) => (e) => {
  setTempTask({ task: e.target.value });
};

export const handleClickOpen = (setOpen) => () => {
  setOpen(true);
};

export const handleClose = (setOpen) => () => {
  setOpen(false);
};
