import { Box } from '@mui/material';

import { fetchAllUsers } from '../api/user.api';
import UserCard from '../components/UserCard';
import { usersListBreadcrumbConfig } from '../config/users.breadcrumbs';
import { usersListConfig } from '../config/usersList.config';
import { UserStatus } from '../constants/userStatus';

import PageCreateButton from '@/components/common/PageCreateButton';
import ListPageLayout from '@/components/layout/ListPageLayout';
import ListFiltersBlock from '@/components/list/ListFilterBlock';
import { ListSkeleton } from '@/components/skeletons/ListItemCardSkeleton';
import PageHeader from '@/components/ui/PageHeader';
import { useList } from '@/hooks/useList';
import { useStrings } from '@/i18n/useStrings';
import { useBreadcrumbs } from '@/router/breadcrumbs/useBreadcrumbs';
import { ROUTES } from '@/router/routes';
import { createEnumOptions } from '@/utils/createListConfig';

const UsersList = () => {
  const { usersPage } = useStrings();

  const {
    items,
    search,
    setSearch,
    filters,
    setFilter,
    page,
    setPage,
    totalPages,
    isLoading,
  } = useList(fetchAllUsers, usersListConfig);

  const statusOptions = createEnumOptions(UserStatus, usersPage.status);
  const breadcrumbs = useBreadcrumbs(usersListBreadcrumbConfig);

  const resetFilters = () => {
    setSearch('');
    setFilter('status', 'all');
    setPage(1);
  };

  return (
    <Box>
      <PageHeader
        title={usersPage.title}
        subtitle={usersPage.subtitle}
        breadcrumbs={breadcrumbs}
        actions={
          <PageCreateButton
            to={ROUTES.USERS} // TO DO: add real route for user creation
            label={usersPage.actions.createUser}
          />
        }
      />

      <ListFiltersBlock
        search={{
          value: search,
          onChange: setSearch,
          placeholder: usersPage.filters.searchPlaceholder,
        }}
        filters={[
          {
            label: usersPage.filters.status,
            value: filters.status || 'all',
            onChange: (val) => setFilter('status', val as UserStatus),
            options: statusOptions,
          },
        ]}
        sx={{ mb: 3 }}
      />

      {isLoading ? (
        <ListSkeleton count={6} />
      ) : (
        <ListPageLayout
          items={items}
          page={page}
          totalPages={totalPages}
          setPage={setPage}
          resetFilters={resetFilters}
          renderItem={(user) => (
            <UserCard
              user={user}
              onEdit={(id) => console.log('Edit user:', id)}
              onDelete={(id) => console.log('Delete user:', id)}
            />
          )}
        />
      )}
    </Box>
  );
};

export default UsersList;
