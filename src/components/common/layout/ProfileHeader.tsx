import { Box, Typography, Avatar, Chip } from '@mui/material';
import { type ReactNode, type ReactElement } from 'react';

type ProfileHeaderProps = {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  statusLabel: string;
  statusColor?:
    | 'success'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'warning';
  statusIcon?: ReactElement;
};

const ProfileHeader = ({
  icon,
  title,
  subtitle,
  statusLabel,
  statusColor = 'default',
  statusIcon,
}: ProfileHeaderProps) => {
  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 120,
          height: 120,
          borderRadius: '50%',
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          fontSize: '2.5rem',
          fontWeight: 600,
        }}
      >
        {icon}
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="h4"
          gutterBottom
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 1 }}
          >
            {subtitle}
          </Typography>
        )}
        <Chip
          icon={statusIcon}
          label={statusLabel}
          color={statusColor}
          size="medium"
        />
      </Box>
    </Box>
  );
};

ProfileHeader.displayName = 'ProfileHeader';

export default ProfileHeader;
