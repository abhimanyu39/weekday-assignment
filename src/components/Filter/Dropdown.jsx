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

const Dropdown = ({
  type,
  options,
  selected,
  onChange,
  onDelete,
  multiple,
}) => {
  console.log(selected, typeof selected);
  const renderValue = (selected) => {
    return (
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
        {selected?.map((value) => (
          <Chip key={value} label={value} sx={{ zIndex: "3" }} />
        ))}
      </Box>
    );
  };

  const renderSelected = () => {
    return <Chip key={selected} label={selected} sx={{ zIndex: "3" }} />;
  };

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
          renderValue={
            typeof selected === "object" ? renderValue : renderSelected
          }
          sx={{
            height: `auto`,
            maxHeight: "100px",
            width: "200px",
            padding: `4px 6px`,
            margin: `0 20px`,
            border: `rgb(204, 204, 204)`,
          }}
          multiple={multiple ?? false}
        >
          {options &&
            options.map((name) => (
              <MenuItem
                key={name}
                value={name}
              >
                {name}
              </MenuItem>
            ))}
        </Select>
      </Box>
    </>
  );
};

export default Dropdown;
