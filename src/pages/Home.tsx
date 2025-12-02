import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/router/routes';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 8,
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
      >
        Welcome to Meduzzen
      </Typography>
      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Quiz and Company Management System
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate(ROUTES.ABOUT)}
        >
          Learn More
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => navigate(ROUTES.USERS)}
        >
          View Users
        </Button>
      </Box>
    </Box>
  );
};

Home.displayName = 'Home';

export default Home;
