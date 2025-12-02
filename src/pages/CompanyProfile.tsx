import {
  Business as BusinessIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Quiz as QuizIcon,
} from '@mui/icons-material';
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
import { companyInfoConfig, type CompanyInfo } from '@/config/companyInfo';
import { companyStatsConfig } from '@/config/companyStats';
import {
  companyProfilePageContent,
  getCompanyQuizzes,
  getCompanyStats,
  mockCompanies,
} from '@/data';
import { useProfile } from '@/hooks/useProfile';
import { ROUTES } from '@/router/routes';
import { buildConfig } from '@/utils/buildConfig';
import { formatDateShort } from '@/utils/date';

const CompanyProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { breadcrumbs, sections, notFound } = companyProfilePageContent;

  const {
    entity: company,
    stats,
    related: quizzes,
  } = useProfile({
    id,
    source: mockCompanies,
    getStats: getCompanyStats,
    getRelated: getCompanyQuizzes,
  });

  if (!company) {
    return (
      <ProfileNotFound
        title={notFound.title}
        description={notFound.description}
        actionLabel={notFound.action}
        onAction={() => navigate(ROUTES.COMPANIES)}
        breadcrumbs={[
          { label: breadcrumbs.companies, path: ROUTES.COMPANIES },
          { label: notFound.title },
        ]}
      />
    );
  }

  const normalizedCompany: CompanyInfo = {
    owner: company.owner_name,
    visibility: company.is_visible,
    createdAt: company.created_at,
    updatedAt: company.updated_at,
  };

  const quizActivities = quizzes.map((quiz) => ({
    id: quiz.id,
    icon: <QuizIcon />,
    title: quiz.title,
    description: `${quiz.description} • ${quiz.questions_count} questions • ${quiz.completions} ${sections.recentQuizzes.completions}`,
    timestamp: quiz.created_at,
  }));

  return (
    <>
      <PageHeader
        title={company.name}
        breadcrumbs={[
          { label: breadcrumbs.companies, path: ROUTES.COMPANIES },
          { label: company.name },
        ]}
      />

      <SectionPaper>
        <ProfileHeader
          icon={<BusinessIcon sx={{ fontSize: 64 }} />}
          title={company.name}
          subtitle={company.description}
          statusLabel={
            company.is_visible
              ? sections.info.visibility.visible
              : sections.info.visibility.hidden
          }
          statusColor={company.is_visible ? 'success' : 'default'}
          statusIcon={
            company.is_visible ? <VisibilityIcon /> : <VisibilityOffIcon />
          }
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
              items={buildConfig(normalizedCompany, companyInfoConfig)}
            />
          </SectionPaper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <SectionPaper>
            <StatsSection
              title={sections.stats.title}
              stats={buildConfig(stats, companyStatsConfig)}
            />
          </SectionPaper>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <SectionPaper sx={{ mb: 0 }}>
            <ActivitySection
              title={sections.recentQuizzes.title}
              items={quizActivities}
              emptyStateText={sections.recentQuizzes.emptyState}
              formatTimestamp={formatDateShort}
            />
          </SectionPaper>
        </Grid>
      </Grid>
    </>
  );
};

CompanyProfile.displayName = 'CompanyProfile';

export default CompanyProfile;
