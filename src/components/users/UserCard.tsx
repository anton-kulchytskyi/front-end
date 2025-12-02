import {
  Email as EmailIcon,
  CalendarToday as CalendarIcon,
} from '@mui/icons-material';
import {
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
  Avatar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { BaseCard } from '../common';

import type { User } from '@/types/user.types';

type UserCardProps = {
  user: User;
};

const UserCard = ({ user }: UserCardProps) => {
  const navigate = useNavigate();

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <BaseCard hoverable>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar
            sx={{
              width: 56,
              height: 56,
              bgcolor: 'primary.main',
              fontSize: '1.25rem',
              fontWeight: 600,
            }}
          >
            {getInitials(user.full_name)}
          </Avatar>
          <Box sx={{ ml: 2, flexGrow: 1 }}>
            <Typography
              variant="h6"
              gutterBottom
            >
              {user.full_name}
            </Typography>
            <Chip
              label={user.is_active ? 'Active' : 'Inactive'}
              size="small"
              color={user.is_active ? 'success' : 'default'}
              sx={{ height: 20, fontSize: '0.75rem' }}
            />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <EmailIcon sx={{ fontSize: 18, color: 'text.secondary', mr: 1 }} />
          <Typography
            variant="body2"
            color="text.secondary"
          >
            {user.email}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CalendarIcon sx={{ fontSize: 18, color: 'text.secondary', mr: 1 }} />
          <Typography
            variant="body2"
            color="text.secondary"
          >
            Joined {formatDate(user.created_at)}
          </Typography>
        </Box>

        <Button
          variant="outlined"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => navigate(`/users/${user.id}`)}
        >
          View Profile
        </Button>
      </CardContent>
    </BaseCard>
  );
};

UserCard.displayName = 'UserCard';

export default UserCard;
