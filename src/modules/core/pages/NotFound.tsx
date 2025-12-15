import SearchOffIcon from '@mui/icons-material/SearchOff';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import EmptyState from '@/components/ui/EmptyState';
import { ROUTES } from '@/router/routes';

const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <EmptyState
      icon={<SearchOffIcon fontSize="inherit" />}
      title={t('notFound.title')}
      description={t('notFound.description')}
      action={{
        label: t('notFound.action'),
        onClick: () => navigate(ROUTES.HOME.path),
      }}
    />
  );
};

export default NotFound;
