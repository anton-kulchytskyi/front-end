import { Box, Typography, Paper } from '@mui/material';

import { StateControls } from './StateControls';
import { StateDisplay } from './StateDisplay';

export const StateDemo = () => {
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ mb: 3 }}
      >
        Redux Toolkit Demo
      </Typography>

      <Paper
        elevation={3}
        sx={{ p: 3 }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          This demo shows how Redux Toolkit manages state. Type a message below
          to update the state, or click "Clear State" to reset it.
        </Typography>

        <StateDisplay />
        <StateControls />
      </Paper>
    </Box>
  );
};
