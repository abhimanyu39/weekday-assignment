import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: [],
  experience: "",
  salary: "",
  name: "",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      const { payload } = action;
      switch (payload.type) {
        case "ROLE":
          state.role = payload.payload;
          break;

        case "EXPERIENCE":
          state.experience = payload.payload;
          break;

        case "SALARY":
          state.salary = payload.payload;
          break;

        case "NAME":
          state.name = payload.payload;
          break;

        default:
          break;
      }
    },
  },
});

export const { updateFilter } = filterSlice.actions;

export default filterSlice.reducer;
