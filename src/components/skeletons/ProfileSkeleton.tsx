// src/components/skeletons/ProfileSkeleton.tsx
import { Box, Skeleton, Stack } from '@mui/material';

export const ProfileSkeleton = () => {
  return (
    <Stack
      spacing={2}
      sx={{ p: 3 }}
    >
      <Skeleton
        variant="text"
        width="60%"
        height={32}
      />

      <Skeleton
        variant="text"
        width="40%"
        height={24}
      />

      <Box sx={{ mt: 1 }} />

      <Skeleton
        variant="rectangular"
        height={140}
        sx={{ borderRadius: 2 }}
      />

      <Skeleton
        variant="rectangular"
        height={200}
        sx={{ borderRadius: 2 }}
      />
    </Stack>
  );
};
