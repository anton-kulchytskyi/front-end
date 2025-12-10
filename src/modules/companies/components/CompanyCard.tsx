import { getCompanyVisibilityMeta } from '../config/companyVisibility.config';
import type { Company } from '../types/company.types';

import ListItemCard from '@/components/list/ListItemCard';
import { useStrings } from '@/i18n/useStrings';
import { ROUTES } from '@/router/routes';
import { formatDate } from '@/utils/formatDate';

type CompanyCardProps = {
  company: Company;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const CompanyCard = ({ company, onEdit, onDelete }: CompanyCardProps) => {
  const { companiesPage } = useStrings();

  const targetRoute = ROUTES.COMPANY_PROFILE.replace(':id', String(company.id));

  const status = getCompanyVisibilityMeta(company.is_visible, companiesPage);

  const createdAt = formatDate(company.created_at) ?? '—';
  const updatedAt = formatDate(company.updated_at) ?? '—';

  const meta = [
    { label: companiesPage.labels.id, value: company.id },
    { label: companiesPage.labels.createdAt, value: createdAt },
    { label: companiesPage.labels.updatedAt, value: updatedAt },
  ];

  return (
    <ListItemCard
      to={targetRoute}
      title={company.name}
      subtitle={company.description}
      meta={meta}
      status={status}
      actions={{
        onEdit: () => onEdit(company.id),
        onDelete: () => onDelete(company.id),
      }}
    />
  );
};

export default CompanyCard;
