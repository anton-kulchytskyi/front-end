import { Box, Typography } from '@mui/material';

import { BaseCard } from '@/components/common';

export type StatCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string | number;
};

const StatCard = ({ icon, label, value }: StatCardProps) => {
  const isLongText = typeof value === 'string' && value.length > 12;
  return (
    <BaseCard
      hoverable={false}
      sx={{
        bgcolor: 'grey.100',
        p: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        {icon}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ ml: 1 }}
        >
          {label}
        </Typography>
      </Box>

      <Typography
        variant={isLongText ? 'h6' : 'h4'}
        sx={{
          fontWeight: 700,
          lineHeight: 1.2,
          wordBreak: 'break-word',
        }}
      >
        {value}
      </Typography>
    </BaseCard>
  );
};

StatCard.displayName = 'StatCard';

export default StatCard;
