import { Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

import { ActivitySection } from '@/components/blocks/activity';
import { InfoSection } from '@/components/blocks/info';
import { StatsSection } from '@/components/blocks/stats';
import {
  PageHeader,
  ProfileHeader,
  ProfileNotFound,
  SectionPaper,
} from '@/components/common';
import { userInfoConfig, type UserInfo } from '@/config/userInfo';
import { userStatsConfig } from '@/config/userStats';
import {
  getUserActivity,
  getUserStats,
  mockUsers,
  userProfilePageContent,
} from '@/data';
import { useProfile } from '@/hooks/useProfile';
import { ROUTES } from '@/router/routes';
import { buildConfig } from '@/utils/buildConfig';
import { formatDateTime } from '@/utils/date';

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

const UserProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { breadcrumbs, sections, notFound } = userProfilePageContent;

  const {
    entity: user,
    stats,
    related: activity,
  } = useProfile({
    id,
    source: mockUsers,
    getStats: getUserStats,
    getRelated: getUserActivity,
  });

  if (!user) {
    return (
      <ProfileNotFound
        title={notFound.title}
        description={notFound.description}
        actionLabel={notFound.action}
        onAction={() => navigate(ROUTES.USERS)}
        breadcrumbs={[
          { label: breadcrumbs.users, path: ROUTES.USERS },
          { label: notFound.title },
        ]}
      />
    );
  }

  const normalizedUser: UserInfo = {
    email: user.email,
    createdAt: user.created_at,
    updatedAt: user.updated_at,
  };

  return (
    <>
      <PageHeader
        title={user.full_name}
        breadcrumbs={[
          { label: breadcrumbs.users, path: ROUTES.USERS },
          { label: user.full_name },
        ]}
      />

      <SectionPaper>
        <ProfileHeader
          icon={getInitials(user.full_name)}
          title={user.full_name}
          subtitle={user.email}
          statusLabel={
            user.is_active
              ? sections.info.status.active
              : sections.info.status.inactive
          }
          statusColor={user.is_active ? 'success' : 'default'}
        />
      </SectionPaper>

      <Grid
        container
        spacing={3}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <SectionPaper>
            <InfoSection
              title={sections.info.title}
              items={buildConfig(normalizedUser, userInfoConfig)}
            />
          </SectionPaper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <SectionPaper>
            <StatsSection
              title={sections.stats.title}
              stats={buildConfig(stats, userStatsConfig)}
            />
          </SectionPaper>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <SectionPaper sx={{ mb: 0 }}>
            <ActivitySection
              title={sections.activity.title}
              items={activity}
              emptyStateText={sections.activity.emptyState}
              formatTimestamp={formatDateTime}
            />
          </SectionPaper>
        </Grid>
      </Grid>
    </>
  );
};

UserProfile.displayName = 'UserProfile';

export default UserProfile;
