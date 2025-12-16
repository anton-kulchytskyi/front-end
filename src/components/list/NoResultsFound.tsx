import SearchOffIcon from '@mui/icons-material/SearchOff';
import { useTranslation } from 'react-i18next';

import EmptyState from '@/components/ui/EmptyState';

type NoResultsFoundProps = {
  action?: {
    label: string;
    onClick: () => void;
  };
};

const NoResultsFound = ({ action }: NoResultsFoundProps) => {
  const { t } = useTranslation();

  return (
    <EmptyState
      icon={<SearchOffIcon fontSize="inherit" />}
      title={t('noResultsTitle')}
      description={t('noResultsDescription')}
      action={action}
    />
  );
};

export default NoResultsFound;
