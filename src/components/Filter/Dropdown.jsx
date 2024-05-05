import {
  Box,
  Chip,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useState } from "react";

const Dropdown = ({ type, options, selected, onChange, onDelete }) => {
  console.log(selected);
  const chipClick = (e) => {
    console.log(e);
    e.stopPropagation();
  };
  console.log(options);
  return (
    <>
      <InputLabel sx={{ display: "inline" }} id="demo-multiple-name-label">
        {type}
      </InputLabel>
      <Select
        id="demo-multiple-name-label"
        label="Role"
        value={selected}
        onChange={onChange}
        input={<OutlinedInput label="Role" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip
                key={value}
                label={value}
                onClick={chipClick}
                onDelete={onDelete}
                sx={{ zIndex: "3" }}
              />
            ))}
          </Box>
        )}
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
    </>
  );
};

export default Dropdown;
