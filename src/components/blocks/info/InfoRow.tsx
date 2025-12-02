import { Box, Typography } from '@mui/material';
import type { ReactNode } from 'react';

export type InfoRowProps = {
  icon: ReactNode;
  label: string;
  value: string | number;
  isLast?: boolean;
};

const InfoRow = ({ icon, label, value, isLast }: InfoRowProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: isLast ? 0 : 2,
      }}
    >
      <Box sx={{ fontSize: 20, color: 'text.secondary', mr: 2 }}>{icon}</Box>

      <Box>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          {label}
        </Typography>

        <Typography variant="body1">{value}</Typography>
      </Box>
    </Box>
  );
};

InfoRow.displayName = 'InfoRow';
export default InfoRow;
