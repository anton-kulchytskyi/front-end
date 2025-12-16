import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { fetchAllUsers } from '../api/user.api';
import UserCard from '../components/UserCard';
import { usersListConfig } from '../config/usersList.config';
import { UserStatus, userStatusOptions } from '../constants/userStatus';

import PageCreateButton from '@/components/common/PageCreateButton';
import ListPageLayout from '@/components/layout/ListPageLayout';
import ListFiltersBlock, {
  type ListFilterOption,
} from '@/components/list/ListFilterBlock';
import { ListSkeleton } from '@/components/skeletons/ListItemCardSkeleton';
import PageHeader from '@/components/ui/PageHeader';
import { useList } from '@/hooks/useList';
import { getRouteBreadcrumbs } from '@/router/breadcrumbs/helpers';
import { ROUTES } from '@/router/routes';

const UsersList = () => {
  const { t } = useTranslation('usersPage');
  const { t: tNav } = useTranslation('nav');

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

  const breadcrumbs = getRouteBreadcrumbs('USERS', tNav);

  const statusOptions: ListFilterOption[] = userStatusOptions.map((opt) => ({
    value: opt.value,
    label: t(opt.label),
  }));

  const resetFilters = () => {
    setSearch('');
    setFilter('status', 'all');
    setPage(1);
  };

  return (
    <Box>
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumbs={breadcrumbs}
        actions={
          <PageCreateButton
            to={ROUTES.USERS.path} // TO DO: add real route for user creation
            label={t('actions.createUser')}
          />
        }
      />

      <ListFiltersBlock
        search={{
          value: search,
          onChange: setSearch,
          placeholder: t('filters.searchPlaceholder'),
        }}
        filters={[
          {
            label: t('filters.status'),
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
              key={user.id}
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
