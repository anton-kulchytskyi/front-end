import { Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useCompanyProfileViewModel } from '../config/useCompanyProfileViewModel';

import DetailPageLayout from '@/components/layout/DetailPageLayout';
import { getRouteBreadcrumbs } from '@/router/breadcrumbs/helpers';

const CompanyProfile = () => {
  const { t } = useTranslation('companiesPage');
  const { t: tNav } = useTranslation('nav');
  const vm = useCompanyProfileViewModel(t);

  const breadcrumbs = [
    ...getRouteBreadcrumbs('COMPANY_PROFILE', tNav),
    { label: vm.title },
  ];

  return (
    <DetailPageLayout
      title={vm.title}
      subtitle={vm.subtitle}
      breadcrumbs={breadcrumbs}
      isLoading={vm.isLoading}
      hasData={vm.hasData}
      backToRoute={vm.backToRoute.path}
      backToLabel={t('navigation.backToCompanies')}
      sidebarContent={vm.sidebar}
      actions={
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="outlined"
            disabled={!vm.actions.canEdit}
          >
            {t('actions.edit')}
          </Button>
          <Button
            variant="outlined"
            color="error"
            disabled={!vm.actions.canDelete}
          >
            {t('actions.delete')}
          </Button>
        </Box>
      }
    >
      {vm.content}
    </DetailPageLayout>
  );
};

export default CompanyProfile;
