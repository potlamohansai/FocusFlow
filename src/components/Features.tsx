import { Box, Typography, Grid, Paper } from "@mui/material";
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
      <Typography variant="h4" align="center" gutterBottom>
        Features
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ px: 4 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper sx={{ p: 4, textAlign: "center", borderRadius: 3 }}>
              {feature.icon}
              <Typography variant="h6" mt={2}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
