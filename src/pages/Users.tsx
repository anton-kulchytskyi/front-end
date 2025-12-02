import { PageHeader, SectionPaper } from '@components/common';

import { ListFiltersBlock, ListGridBlock } from '@/components/blocks/list';
import { UserCard } from '@/components/users';
import { mockUsers, usersPageContent } from '@/data';
import { useList } from '@/hooks/useList';

const Users = () => {
  const { header, search, filters, emptyState } = usersPageContent;

  const list = useList(mockUsers, {
    searchKeys: ['full_name', 'email'],
    itemsPerPage: 6,
    filters: {
      status: (user, value) =>
        value === 'all' ||
        (value === 'active' && user.is_active) ||
        (value === 'inactive' && !user.is_active),
    },
  });

  return (
    <>
      <PageHeader
        title={header.title}
        subtitle={header.subtitle}
      />

      <SectionPaper>
        <ListFiltersBlock
          search={{
            value: list.search,
            onChange: list.setSearch,
            placeholder: search.placeholder,
          }}
          filters={[
            {
              label: filters.status.label,
              value: list.filters.status,
              onChange: (v) => list.setFilter('status', v),
              options: filters.status.options,
            },
          ]}
        />

        <ListGridBlock
          items={list.items}
          currentPage={list.page}
          totalPages={list.totalPages}
          onPageChange={list.setPage}
          emptyState={emptyState}
          renderItem={(user) => <UserCard user={user} />}
        />
      </SectionPaper>
    </>
  );
};

Users.displayName = 'Users';

export default Users;
