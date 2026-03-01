import { Box, Typography, Button, Container } from "@mui/material";

const HeroSection = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        gap={4}
      >
        <Box flex={1}>
          <img
            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28"
            alt="FocusFlow Device"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </Box>

        <Box flex={1}>
          <Typography variant="h4" gutterBottom>
            Deep Work. Zero Distractions.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            FocusFlow is a smart desk companion designed to enhance
            productivity, improve posture, and eliminate digital distractions
            during your focus sessions.
          </Typography>

          <Button variant="contained" size="large">
            Pre-Order Now
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
