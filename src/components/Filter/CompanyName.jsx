import { useState } from "react";
import { Box, InputLabel, TextField } from "@mui/material";

const CompanyName = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    event.stopPropagation();
    const {
      target: { value },
    } = event;
    setName(value);
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
