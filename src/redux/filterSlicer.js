import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: [],
  experience: [],
  salary: undefined,
  name: undefined,
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      console.log(action);
      switch (action.type) {
        case "ROLE":
          state.role = action.payload;
          break;

        case "EXPERIENCE":
          state.experience = action.payload;
          break;

        case "SALARY":
          state.salary = action.payload;
          break;

        case "NAME":
          state.name = action.payload;
          break;

        default:
          break;
      }
    },
  },
});

export const { updateFilter } = filterSlice.actions;

export default filterSlice.reducer;
