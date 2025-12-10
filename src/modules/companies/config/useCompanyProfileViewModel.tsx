import { fetchCompanyById } from '../api/company.api';
import CompanySidebarMeta from '../components/CompanySidebarMeta';
import type { Company } from '../types/company.types';

import { companyProfileBreadcrumbConfig } from './companies.breadcrumbs';
import { getCompanyVisibilityMeta } from './companyVisibility.config';

import { ProfileSkeleton } from '@/components/skeletons/ProfileSkeleton';
import { useProfile } from '@/hooks/useProfile';
import type { TranslationSchema } from '@/i18n';
import { useBreadcrumbs } from '@/router/breadcrumbs/useBreadcrumbs';
import { ROUTES } from '@/router/routes';
import { formatDate } from '@/utils/formatDate';

export const useCompanyProfileViewModel = (strings: TranslationSchema) => {
  const {
    data: company,
    isLoading,
    error,
  } = useProfile<Company>(fetchCompanyById);

  const hasData = !!company && !error;

  const breadcrumbs = useBreadcrumbs<Company>(
    companyProfileBreadcrumbConfig,
    company
  );

  const title = hasData
    ? company.name
    : strings.companiesPage.profile.defaultTitle;

  const subtitle =
    hasData && company
      ? `${strings.companiesPage.labels.id}: ${company.id} | ${
          company.is_visible
            ? strings.companiesPage.status.visible
            : strings.companiesPage.status.hidden
        }`
      : undefined;

  let content;
  let sidebar;

  if (isLoading) {
    content = <ProfileSkeleton />;
  } else if (hasData && company) {
    content = (
      <>
        <strong>{strings.companiesPage.title}:</strong> {company.description}
      </>
    );

    sidebar = (
      <CompanySidebarMeta
        company={company}
        meta={[
          {
            label: strings.companiesPage.labels.owner,
            value: company.owner_id,
          },
          {
            label: strings.companiesPage.labels.createdAt,
            value: formatDate(company.created_at) ?? '—',
          },
          {
            label: strings.companiesPage.labels.updatedAt,
            value: formatDate(company.updated_at) ?? '—',
          },
        ]}
        status={getCompanyVisibilityMeta(
          company.is_visible,
          strings.companiesPage
        )}
      />
    );
  }

  return {
    company,
    isLoading,
    hasData,
    title,
    subtitle,
    breadcrumbs,
    sidebar,
    content,

    backToRoute: ROUTES.COMPANIES,

    actions: {
      canEdit: hasData,
      canDelete: hasData,
    },
  };
};
