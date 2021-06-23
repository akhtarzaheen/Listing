import { taskSliceActions } from "./task-slice";

const fetchTasks = () => {
  return (dispatch) => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    dispatch(taskSliceActions.addTask(tasks));
    return tasks;
  };
};

export default fetchTasks;

export const updateTasks = (newTask, id) => {
  return (dispatch) => {
    console.log(id);
    console.log("inside updateTask");
    console.log(newTask, id);
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(tasks);
    const existingTaskIndex = tasks.findIndex(
      (task) => task.id.toString() === id.toString()
    );
    // if(tasks)
    console.log(existingTaskIndex);
    console.log(tasks[0]);
    tasks[existingTaskIndex] = newTask;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    dispatch(taskSliceActions.updateTask(tasks));
    return tasks;
  };
};

export const removeTask = (id) => {
  return (dispatch) => {
    console.log(id);
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(tasks);
    const filteredTasks = tasks.filter(
      (task) => task.id.toString() !== id.toString()
    );
    console.log(filteredTasks);
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
    dispatch(taskSliceActions.updateTask(filteredTasks));
    return filteredTasks;
  };
};
