import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/router/routes';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 8,
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
      >
        404
      </Typography>
      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Page not found
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate(ROUTES.HOME)}
      >
        Go Home
      </Button>
    </Box>
  );
};

NotFound.displayName = 'NotFound';

export default NotFound;
