import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobList: [],
};

export const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    updateJobs: (state, action) => {
      console.log(action);
      state.jobList = [...state.jobList, ...action.payload];
    },
  },
});

export const { updateJobs } = jobSlice.actions;

export default jobSlice.reducer;
