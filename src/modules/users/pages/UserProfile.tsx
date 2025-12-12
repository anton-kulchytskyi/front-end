import { Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useUserProfileViewModel } from '../config/useUserProfileViewModel';

import DetailPageLayout from '@/components/layout/DetailPageLayout';

const UserProfile = () => {
  const { t } = useTranslation('usersPage');

  const vm = useUserProfileViewModel(t);

  return (
    <DetailPageLayout
      title={vm.title}
      subtitle={vm.subtitle}
      breadcrumbs={vm.breadcrumbs}
      isLoading={vm.isLoading}
      hasData={vm.hasData}
      backToRoute={vm.backToRoute}
      backToLabel={t('navigation.backToUsers')}
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

export default UserProfile;
