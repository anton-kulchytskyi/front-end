import { PageHeader, SectionPaper } from '@components/common';

import { ListFiltersBlock, ListGridBlock } from '@/components/blocks/list';
import { CompanyCard } from '@/components/companies';
import { mockCompanies, companiesPageContent } from '@/data';
import { useList } from '@/hooks/useList';

const Companies = () => {
  const { header, search, filters, card, emptyState } = companiesPageContent;

  const list = useList(mockCompanies, {
    searchKeys: ['name'],
    itemsPerPage: 6,
    filters: {
      visibility: (company, value) =>
        value === 'all' ||
        (value === 'visible' && company.is_visible) ||
        (value === 'hidden' && !company.is_visible),
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
              label: filters.visibility.label,
              value: list.filters.visibility,
              onChange: (v) => list.setFilter('visibility', v),
              options: filters.visibility.options,
            },
          ]}
        />

        <ListGridBlock
          items={list.items}
          currentPage={list.page}
          totalPages={list.totalPages}
          onPageChange={list.setPage}
          emptyState={emptyState}
          renderItem={(company) => (
            <CompanyCard
              company={company}
              labels={card}
            />
          )}
        />
      </SectionPaper>
    </>
  );
};

Companies.displayName = 'Companies';

export default Companies;
