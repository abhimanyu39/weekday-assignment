import { Box } from "@mui/material";
import Filters from "../Filter/Filters";

const Header = () => {
  return (
    <Box component={"header"} height={115}>
      <Filters />
    </Box>
  );
};

export default Header;
