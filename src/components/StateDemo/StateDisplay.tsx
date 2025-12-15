import { Box, Typography, Paper } from '@mui/material';
import { useAppSelector } from '@store/hooks';

import { DEFAULT_TEST_STRING } from '@/store/slices/testSlice';

export const StateDisplay = () => {
  const testString = useAppSelector((state) => state.test.testString);

  return (
    <Paper
      elevation={2}
      sx={{ p: 3, mb: 3 }}
    >
      <Typography
        variant="h6"
        gutterBottom
      >
        Current State Value:
      </Typography>
      <Box
        sx={{
          p: 2,
          border: 1,
          borderColor: 'secondary.main',
          borderRadius: 1,
          minHeight: '60px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: 500 }}
        >
          {testString || DEFAULT_TEST_STRING}
        </Typography>
      </Box>
    </Paper>
  );
};
