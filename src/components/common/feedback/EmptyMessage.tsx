import { Box, Typography } from '@mui/material';
import type { ReactNode } from 'react';

type EmptyMessageProps = {
  text: string;
  icon?: ReactNode;
  sx?: object;
};

const EmptyMessage = ({ text, icon, sx }: EmptyMessageProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        color: 'text.secondary',
        mt: 1,
        ...sx,
      }}
    >
      {icon && (
        <Box
          sx={{ mr: 1, display: 'flex', alignItems: 'center', fontSize: 18 }}
        >
          {icon}
        </Box>
      )}

      <Typography
        variant="body2"
        color="text.secondary"
      >
        {text}
      </Typography>
    </Box>
  );
};

EmptyMessage.displayName = 'EmptyMessage';
export default EmptyMessage;
