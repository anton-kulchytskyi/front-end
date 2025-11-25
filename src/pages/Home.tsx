import { Container, Typography, Button } from '@mui/material';

export default function HomePage() {
  return (
    <Container
      maxWidth="md"
      sx={{ mt: 12, textAlign: 'center' }}
    >
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
        Welcome to the React frontend for our FastAPI backend 🚀
      </Typography>

      <Button
        variant="contained"
        size="large"
      >
        Get Started
      </Button>
    </Container>
  );
}
