import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <Box
        height={"auto"}
        width={"auto"}
        m={4}
        sx={{ border: "2px solid grey" }}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
