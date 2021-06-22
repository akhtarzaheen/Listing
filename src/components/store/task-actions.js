import { taskSliceActions } from "./task-slice";

const fetchTasks = () => {
  return (dispatch) => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    dispatch(taskSliceActions.addTask(tasks));
    return tasks;
  };
};

export default fetchTasks;
