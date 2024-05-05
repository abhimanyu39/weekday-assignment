import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobSlicer";
import filterReducer from "./filterSlicer";

export const store = configureStore({
  reducer: {
    jobs: jobReducer,
    filters: filterReducer,
  },
});
