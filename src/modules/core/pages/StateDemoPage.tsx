import { Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { StateDemo } from '@/components/StateDemo';
import CustomBreadcrumbs from '@/components/ui/CustomBreadcrumbs';
import HealthCheckView from '@/modules/healthCheck/components/HealthCheckView';
import { getRouteBreadcrumbs } from '@/router/breadcrumbs/helpers';

const StateDemoPage = () => {
  const { t: tNav } = useTranslation('nav');
  const breadcrumbs = getRouteBreadcrumbs('STATE_DEMO', tNav);

  return (
    <Container sx={{ py: 4 }}>
      <CustomBreadcrumbs crumbs={breadcrumbs} />

      <Grid
        container
        spacing={3}
        alignItems="stretch"
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <StateDemo />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <HealthCheckView />
        </Grid>
      </Grid>
    </Container>
  );
};

export default StateDemoPage;
