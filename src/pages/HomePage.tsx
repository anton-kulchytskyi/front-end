import { Typography, Box, Button } from '@mui/material';

export default function HomePage() {
  return (
    <Box sx={{ mt: 10, textAlign: 'center' }}>
      <Typography
        variant="h3"
        gutterBottom
      >
        Quiz Management Platform
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        component="p"
        sx={{ mb: 3 }}
      >
        React frontend for the FastAPI backend 🚀
      </Typography>

      <Button
        variant="contained"
        size="large"
      >
        Get Started
      </Button>
    </Box>
  );
}
