import {
  Box,
  Chip,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useState } from "react";

const Dropdown = ({ type, options, selected, onChange, onDelete }) => {
  console.log(selected);
  // const chipClick = (e) => {
  //   console.log(e);
  //   e.stopPropagation();
  // };
  console.log(options);
  return (
    <>
      <Box>
        <InputLabel
          id="demo-multiple-name-label"
          sx={{
            width: "200px",
            margin: `0 20px`,
          }}
        >
          {type}
        </InputLabel>
        <Select
          id="demo-multiple-name-label"
          value={selected}
          onChange={onChange}
          renderValue={(selected) => (
            <Box
              sx={{
                height: `auto`,
                maxHeight: "70px",
                padding: `4px 6px`,
                display: "flex",
                overflowY: `auto`,
                flexWrap: "wrap",
                gap: 0.5,
              }}
            >
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  // onClick={chipClick}
                  // onDelete={onDelete}
                  sx={{ zIndex: "3" }}
                />
              ))}
            </Box>
          )}
          sx={{
            height: `auto`,
            maxHeight: "100px",
            width: "200px",
            padding: `4px 6px`,
            margin: `0 20px`,
            border: `rgb(204, 204, 204)`,
          }}
          multiple
        >
          {options &&
            options.map((name) => (
              <MenuItem
                key={name}
                value={name}
                // style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
        </Select>
      </Box>
      {/* <Box
        display={"inline-block"}
        maxWidth={200}
        border={`1px solid black`}
        borderRadius={1}
        borderColor={`rgb(204, 204, 204)`}
      >
        {type}
        <IconButton></IconButton>
      </Box> */}
    </>
  );
};

export default Dropdown;
