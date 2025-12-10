import { Box, Typography } from '@mui/material';

import type { User } from '../types/user.types';

interface Props {
  user: User;
}

export const UserSidebarMeta = ({ user }: Props) => (
  <Box
    sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 1 }}
  >
    <Typography
      variant="h6"
      gutterBottom
    >
      Metadata
    </Typography>

    <Box sx={{ mb: 1 }}>
      <Typography variant="subtitle2">Full name:</Typography>
      <Typography
        variant="body1"
        color="text.primary"
      >
        {user.full_name}
      </Typography>
    </Box>

    <Box sx={{ mb: 1 }}>
      <Typography variant="subtitle2">Created:</Typography>
      <Typography
        variant="body1"
        color="text.secondary"
      >
        {new Date(user.created_at).toLocaleDateString()}
      </Typography>
    </Box>

    {user.updated_at && user.updated_at !== user.created_at && (
      <Box>
        <Typography variant="subtitle2">Updated:</Typography>
        <Typography
          variant="body1"
          color="text.secondary"
        >
          {new Date(user.updated_at).toLocaleDateString()}
        </Typography>
      </Box>
    )}
  </Box>
);
