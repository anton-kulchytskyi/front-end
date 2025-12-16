import { Box } from '@mui/material';
import { useMemo } from 'react';

import { fetchAllCompanies } from '../api/company.api';
import CompanyCard from '../components/CompanyCard';
import { companiesListBreadcrumbConfig } from '../config/companies.breadcrumbs';
import { companiesListConfig } from '../config/companiesList.config';
import { CompanyVisibility } from '../constans/companyVisibility';

import ListPageLayout from '@/components/layout/ListPageLayout';
import ListFiltersBlock from '@/components/list/ListFilterBlock';
import { ListSkeleton } from '@/components/skeletons/ListItemCardSkeleton';
import ButtonLinkComponent from '@/components/ui/ButtonLinkComponent';
import PageHeader from '@/components/ui/PageHeader';
import { useList } from '@/hooks/useList';
import { useStrings } from '@/i18n/useStrings';
import { useBreadcrumbs } from '@/router/breadcrumbs/useBreadcrumbs';
import { ROUTES } from '@/router/routes';
import { createEnumOptions } from '@/utils/createListConfig';

const CompaniesList = () => {
  const { companiesPage } = useStrings();

  const listConfig = useMemo(() => companiesListConfig, []);

  const {
    items,
    isLoading,
    search,
    setSearch,
    filters,
    setFilter,
    page,
    setPage,
    totalPages,
  } = useList(fetchAllCompanies, listConfig);

  const breadcrumbs = useBreadcrumbs(companiesListBreadcrumbConfig);

  const visibilityOptions = createEnumOptions(
    CompanyVisibility,
    companiesPage.status
  );

  const resetFilters = () => {
    setSearch('');
    setFilter('visibility', CompanyVisibility.ALL);
    setPage(1);
  };

  return (
    <Box>
      <PageHeader
        title={companiesPage.title}
        subtitle={companiesPage.subtitle}
        breadcrumbs={breadcrumbs}
        actions={
          <ButtonLinkComponent
            to={ROUTES.COMPANIES} // TO DO: add real route for company creation
            variant="contained"
          >
            {companiesPage.actions.createCompany}
          </ButtonLinkComponent>
        }
      />

      <ListFiltersBlock
        search={{
          value: search,
          onChange: setSearch,
          placeholder: companiesPage.filters.searchPlaceholder,
        }}
        filters={[
          {
            label: companiesPage.filters.visibility,
            value: filters.visibility || CompanyVisibility.ALL,
            onChange: (val) =>
              setFilter('visibility', val as CompanyVisibility),
            options: visibilityOptions,
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
          setPage={setPage}
          totalPages={totalPages}
          resetFilters={resetFilters}
          renderItem={(company) => (
            <CompanyCard
              company={company}
              onEdit={(id) => console.log('Edit company:', id)}
              onDelete={(id) => console.log('Delete company:', id)}
            />
          )}
        />
      )}
    </Box>
  );
};

export default CompaniesList;
