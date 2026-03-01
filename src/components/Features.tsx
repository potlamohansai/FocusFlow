import { Box, Typography, Paper } from "@mui/material";
import TimerIcon from "@mui/icons-material/Timer";
import BlockIcon from "@mui/icons-material/Block";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

const Features = () => {
  const features = [
    {
      icon: <TimerIcon fontSize="large" />,
      title: "Smart Focus Timer",
      desc: "Customizable Pomodoro sessions synced with your calendar.",
    },
    {
      icon: <BlockIcon fontSize="large" />,
      title: "Distraction Blocker",
      desc: "Auto-blocks distracting apps & websites during deep work.",
    },
    {
      icon: <AccessibilityNewIcon fontSize="large" />,
      title: "Posture Monitoring",
      desc: "Real-time posture tracking with gentle vibration alerts.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom color="text.primary">
        Features
      </Typography>

      {/* Flex Container */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          px: 4,
        }}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: "100%",
                md: "30%",
              },
            }}
          >
            <Paper sx={{ p: 4, textAlign: "center", borderRadius: 3 }}>
              {feature.icon}
              <Typography variant="h6" mt={2}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.desc}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Features;
