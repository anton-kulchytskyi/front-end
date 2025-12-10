import InboxIcon from '@mui/icons-material/Inbox';
import { Box, Typography, Button } from '@mui/material';
import React from 'react';

type EmptyStateProps = {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
};

const EmptyState = ({ icon, title, description, action }: EmptyStateProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="300px"
      textAlign="center"
      py={4}
    >
      <Box
        sx={{
          fontSize: 64,
          color: 'text.disabled',
          mb: 2,
        }}
      >
        {icon || <InboxIcon fontSize="inherit" />}
      </Box>
      <Typography
        variant="h6"
        gutterBottom
      >
        {title}
      </Typography>
      {description && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          {description}
        </Typography>
      )}
      {action && (
        <Button
          variant="contained"
          color="primary"
          onClick={action.onClick}
        >
          {action.label}
        </Button>
      )}
    </Box>
  );
};

export default EmptyState;
