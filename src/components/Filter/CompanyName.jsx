import { useState } from "react";
import { Box, InputLabel, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../redux/filterSlicer";

const CompanyName = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.filters.name);

  const handleChange = (event) => {
    event.stopPropagation();
    const {
      target: { value },
    } = event;

    const action = {
      type: "NAME",
      payload: value,
    };
    dispatch(updateFilter(action));
  };

  return (
    <Box>
      <InputLabel
        id="demo-multiple-name-label"
        sx={{
          width: "200px",
          margin: `0 20px`,
        }}
      >
        {"Search Company Name"}
      </InputLabel>
      <TextField
        // label="Search Company Name"
        value={name}
        onChange={handleChange}
        sx={{
          margin: `0 20px`,
          height: `64px`,
        }}
      />
    </Box>
  );
};

export default CompanyName;
