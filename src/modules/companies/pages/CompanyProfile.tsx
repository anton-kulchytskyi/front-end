import { Button, Box } from '@mui/material';

import { useCompanyProfileViewModel } from '../config/useCompanyProfileViewModel';

import DetailPageLayout from '@/components/layout/DetailPageLayout';
import { useStrings } from '@/i18n/useStrings';

const CompanyProfile = () => {
  const strings = useStrings();
  const vm = useCompanyProfileViewModel(strings);

  return (
    <DetailPageLayout
      title={vm.title}
      subtitle={vm.subtitle}
      breadcrumbs={vm.breadcrumbs}
      isLoading={vm.isLoading}
      hasData={vm.hasData}
      backToRoute={vm.backToRoute}
      backToLabel={strings.companiesPage.navigation.backToCompanies}
      sidebarContent={vm.sidebar}
      actions={
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="outlined"
            disabled={!vm.actions.canEdit}
          >
            {strings.companiesPage.actions.edit}
          </Button>
          <Button
            variant="outlined"
            color="error"
            disabled={!vm.actions.canDelete}
          >
            {strings.companiesPage.actions.delete}
          </Button>
        </Box>
      }
    >
      {vm.content}
    </DetailPageLayout>
  );
};

export default CompanyProfile;
