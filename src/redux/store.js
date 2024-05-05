import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobSlicer";

export const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});
