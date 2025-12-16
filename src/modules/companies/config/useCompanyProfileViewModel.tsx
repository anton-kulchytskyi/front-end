import { fetchCompanyById } from '../api/company.api';
import CompanySidebarMeta from '../components/CompanySidebarMeta';
import type { Company } from '../types/company.types';

import {
  getCompanySidebarMetaData,
  getCompanyVisibilityMeta,
} from './companyVisibility.config';

import { ProfileSkeleton } from '@/components/skeletons/ProfileSkeleton';
import { useProfile } from '@/hooks/useProfile';
import type { AnyTFunction } from '@/i18n/types';
import { ROUTES } from '@/router/routes';

export const useCompanyProfileViewModel = (t: AnyTFunction) => {
  const {
    data: company,
    isLoading,
    error,
  } = useProfile<Company>(fetchCompanyById);

  const hasData = !!company && !error;

  const title = hasData ? company.name : t('profile.defaultTitle');

  const subtitle =
    hasData && company
      ? `${t('labels.id')}: ${company.id} | ${
          company.is_visible ? t('status.visible') : t('status.hidden')
        }`
      : undefined;

  let content;
  let sidebar;

  if (isLoading) {
    content = <ProfileSkeleton />;
  } else if (hasData && company) {
    content = (
      <>
        <strong>{t('title')}:</strong> {company.description}
      </>
    );

    sidebar = (
      <CompanySidebarMeta
        company={company}
        meta={getCompanySidebarMetaData(company, t)}
        status={getCompanyVisibilityMeta(company.is_visible, t)}
      />
    );
  }

  return {
    company,
    isLoading,
    hasData,
    title,
    subtitle,
    sidebar,
    content,
    backToRoute: ROUTES.COMPANIES,
    actions: {
      canEdit: hasData,
      canDelete: hasData,
    },
  };
};
