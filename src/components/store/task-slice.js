import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      state.task = action.payload;
    },
  },
});

export const taskSliceActions = taskSlice.actions;

export default taskSlice.reducer;
