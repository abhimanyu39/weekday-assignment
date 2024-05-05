import { Box } from "@mui/material";
import Role from "./Role";
import Salary from "./Salary";
import Experience from "./Experience";
import CompanyName from "./CompanyName";

const Filters = () => {
  return (
    <Box display={"flex"}>
      <Role />
      <Salary />
      <Experience />
      <CompanyName />
    </Box>
  );
};

export default Filters;
