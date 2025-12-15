import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { StateDemo } from '@/components/StateDemo';
import CustomBreadcrumbs from '@/components/ui/CustomBreadcrumbs';
import { getRouteBreadcrumbs } from '@/router/breadcrumbs/helpers';

const StateDemoPage = () => {
  const { t: tNav } = useTranslation('nav');
  const breadcrumbs = getRouteBreadcrumbs('STATE_DEMO', tNav);
  return (
    <Container>
      <CustomBreadcrumbs crumbs={breadcrumbs} />
      <StateDemo />
    </Container>
  );
};

export default StateDemoPage;
