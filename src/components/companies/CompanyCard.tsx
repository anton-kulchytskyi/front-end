import {
  Business as BusinessIcon,
  People as PeopleIcon,
  Quiz as QuizIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@mui/icons-material';
import { CardContent, Typography, Box, Chip, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { BaseCard } from '../common';

import type { Company } from '@/types';

type CompanyCardProps = {
  company: Company;
  labels: {
    owner: string;
    members: string;
    quizzes: string;
    viewProfile: string;
    visibility: {
      visible: string;
      hidden: string;
    };
  };
};

const CompanyCard = ({ company, labels }: CompanyCardProps) => {
  const navigate = useNavigate();

  return (
    <BaseCard hoverable>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 48,
              height: 48,
              borderRadius: '50%',
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              mr: 2,
            }}
          >
            <BusinessIcon />
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              gutterBottom
            >
              {company.name}
            </Typography>

            <Chip
              icon={
                company.is_visible ? <VisibilityIcon /> : <VisibilityOffIcon />
              }
              label={
                company.is_visible
                  ? labels.visibility.visible
                  : labels.visibility.hidden
              }
              size="small"
              color={company.is_visible ? 'success' : 'default'}
              sx={{ height: 24, fontSize: '0.75rem' }}
            />
          </Box>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {company.description}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <BusinessIcon
              sx={{ fontSize: 18, color: 'text.secondary', mr: 1 }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {labels.owner}: {company.owner_name}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PeopleIcon sx={{ fontSize: 18, color: 'text.secondary', mr: 1 }} />
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {labels.members}: {company.members_count}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <QuizIcon sx={{ fontSize: 18, color: 'text.secondary', mr: 1 }} />
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {labels.quizzes}: {company.quizzes_count}
            </Typography>
          </Box>
        </Box>

        <Button
          variant="outlined"
          color="primary"
          fullWidth
          onClick={() => navigate(`/companies/${company.id}`)}
        >
          {labels.viewProfile}
        </Button>
      </CardContent>
    </BaseCard>
  );
};

CompanyCard.displayName = 'CompanyCard';

export default CompanyCard;
