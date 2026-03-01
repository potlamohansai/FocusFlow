import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#111" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          FocusFlow
        </Typography>
        <Box>
          <Typography variant="body2">Smart Desk Companion</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
