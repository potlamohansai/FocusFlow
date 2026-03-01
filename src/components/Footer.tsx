import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#111",
        color: "#fff",
        py: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="body2">Contact: support@focusflow.io</Typography>
      <Typography variant="body2">
        © 2026 FocusFlow. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
