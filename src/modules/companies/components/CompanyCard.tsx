import { useTranslation } from 'react-i18next';

import {
  getCompanyMetaData,
  getCompanyVisibilityMeta,
} from '../config/companyVisibility.config';
import type { Company } from '../types/company.types';

import ListItemCard from '@/components/list/ListItemCard';
import { ROUTES } from '@/router/routes';

type CompanyCardProps = {
  company: Company;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const CompanyCard = ({ company, onEdit, onDelete }: CompanyCardProps) => {
  const { t } = useTranslation('companiesPage');

  const targetRoute = ROUTES.COMPANY_PROFILE.replace(':id', String(company.id));

  const status = getCompanyVisibilityMeta(company.is_visible, t);

  const meta = getCompanyMetaData(company, t);

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
