import { Box, Grid, Skeleton } from '@mui/material';
import React from 'react';

const ListItemCardSkeleton: React.FC = () => (
  <Box
    sx={{
      p: 2,
      mb: 2,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '1px solid #eee',
      borderRadius: '4px',
    }}
  >
    <Box sx={{ flexGrow: 1 }}>
      <Skeleton
        variant="text"
        width="60%"
        height={24}
        sx={{ mb: 1 }}
      />
      <Skeleton
        variant="text"
        width="40%"
        height={16}
        sx={{ mb: 1 }}
      />
      <Box sx={{ display: 'flex', gap: 3 }}>
        <Skeleton
          variant="text"
          width={80}
        />
        <Skeleton
          variant="text"
          width={80}
        />
      </Box>
    </Box>
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Skeleton
        variant="circular"
        width={24}
        height={24}
      />
      <Skeleton
        variant="circular"
        width={24}
        height={24}
      />
    </Box>
  </Box>
);

export const ListSkeleton: React.FC<{ count?: number }> = ({ count = 6 }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ minHeight: '400px' }}
    >
      {Array.from(new Array(count)).map((_, index) => (
        <Grid size={{ xs: 12, sm: 6 }}>
          <ListItemCardSkeleton key={index} />
        </Grid>
      ))}
    </Grid>
  );
};
