import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { fetchAllCompanies } from '../api/company.api';
import CompanyCard from '../components/CompanyCard';
import { companiesListBreadcrumbConfig } from '../config/companies.breadcrumbs';
import { companiesListConfig } from '../config/companiesList.config';
import {
  CompanyVisibility,
  CompanyVisibilityOptions,
} from '../constans/companyVisibility';

import ListPageLayout from '@/components/layout/ListPageLayout';
import ListFiltersBlock, {
  type ListFilterOption,
} from '@/components/list/ListFilterBlock';
import { ListSkeleton } from '@/components/skeletons/ListItemCardSkeleton';
import ButtonLinkComponent from '@/components/ui/ButtonLinkComponent';
import PageHeader from '@/components/ui/PageHeader';
import { useList } from '@/hooks/useList';
import { useBreadcrumbs } from '@/router/breadcrumbs/useBreadcrumbs';
import { ROUTES } from '@/router/routes';

const CompaniesList = () => {
  const { t } = useTranslation('companiesPage');

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
  } = useList(fetchAllCompanies, companiesListConfig);

  const breadcrumbs = useBreadcrumbs(companiesListBreadcrumbConfig, t);

  const visibilityOptions: ListFilterOption[] = CompanyVisibilityOptions.map(
    (opt) => ({
      value: opt.value,
      label: t(opt.label),
    })
  );

  const resetFilters = () => {
    setSearch('');
    setFilter('visibility', CompanyVisibility.ALL);
    setPage(1);
  };

  return (
    <Box>
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumbs={breadcrumbs}
        actions={
          <ButtonLinkComponent
            to={ROUTES.COMPANIES} // TO DO: add real route for company creation
            variant="contained"
          >
            {t('actions.createCompany')}
          </ButtonLinkComponent>
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
            label: t('filters.visibility'),
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
              key={company.id}
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
