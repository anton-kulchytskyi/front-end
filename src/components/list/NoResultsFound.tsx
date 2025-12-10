import SearchOffIcon from '@mui/icons-material/SearchOff';

import EmptyState from '@/components/ui/EmptyState';
import { useStrings } from '@/i18n/useStrings';

type NoResultsFoundProps = {
  action?: {
    label: string;
    onClick: () => void;
  };
};

const NoResultsFound = ({ action }: NoResultsFoundProps) => {
  const { general } = useStrings();

  return (
    <EmptyState
      icon={<SearchOffIcon fontSize="inherit" />}
      title={general.noResultsTitle}
      description={general.noResultsDescription}
      action={action}
    />
  );
};

export default NoResultsFound;
