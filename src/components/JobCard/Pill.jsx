import { Chip } from "@mui/material";

const Pill = ({ text }) => {
  return (
    <Chip
      label={text}
      variant="outlined"
      sx={{
        height: `26px`,
        padding: `2px 4px`,
        color: `rgba(0, 0, 0, 0.87)`,
        boxShadow: `rgba(6, 6, 6, 0.05) 0px 2px 6px 0px`,
        borderRadius: `10px`,
        border: `1px solid rgb(230, 230, 230)`,
        fontWeight: `400`,
        lineHeight: `1.5`,
        fontSize: `9px`,
      }}
    />
  );
};

export default Pill;
