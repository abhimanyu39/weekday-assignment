import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <Box
        height={"100vh"}
        width={"auto"}
        m={2}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
