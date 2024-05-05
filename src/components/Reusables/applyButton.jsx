import { Button, styled } from "@mui/material";

export const ApplyButton = styled(Button)({
  width: `100%`,
  borderRadius: `8px`,
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  fontWeight: 500,
  padding: "6px 12px",
  border: "none",
  lineHeight: 1.5,
  color: "black",
  backgroundColor: `rgb(85, 239, 196)`,
  "&:hover": {
    border: `none`,
    backgroundColor: "rgb(85, 239, 196)",
    boxShadow: "none",
  },
  "&:active": {
    border: `none`,
    boxShadow: "none",
    backgroundColor: "rgb(85, 239, 196)",
  },
  "&:focus": {
    outline: `none`,
    border: `none`,
    backgroundColor: "rgb(85, 239, 196)",
    boxShadow: "none",
  },
});
