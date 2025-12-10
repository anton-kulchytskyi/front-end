import { Button, Box } from '@mui/material';

import { useUserProfileViewModel } from '../config/useUserProfileViewModel';

import DetailPageLayout from '@/components/layout/DetailPageLayout';
import { useStrings } from '@/i18n/useStrings';

const UserProfile = () => {
  const strings = useStrings();
  const vm = useUserProfileViewModel(strings);

  return (
    <DetailPageLayout
      title={vm.title}
      subtitle={vm.subtitle}
      breadcrumbs={vm.breadcrumbs}
      isLoading={vm.isLoading}
      hasData={vm.hasData}
      backToRoute={vm.backToRoute}
      backToLabel={strings.usersPage.navigation.backToUsers}
      sidebarContent={vm.sidebar}
      actions={
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="outlined"
            disabled={!vm.actions.canEdit}
          >
            {strings.usersPage.actions.edit}
          </Button>
          <Button
            variant="outlined"
            color="error"
            disabled={!vm.actions.canDelete}
          >
            {strings.usersPage.actions.delete}
          </Button>
        </Box>
      }
    >
      {vm.content}
    </DetailPageLayout>
  );
};

export default UserProfile;
