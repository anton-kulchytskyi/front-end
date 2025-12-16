import { Box, Typography } from '@mui/material';

import CustomBreadcrumbs from './CustomBreadcrumbs';

import type { Crumb } from '@/router/breadcrumbs/types';

type Props = {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  actions?: React.ReactNode;
};

const PageHeader = ({ title, subtitle, breadcrumbs, actions }: Props) => {
  return (
    <Box sx={{ mb: 4 }}>
      {breadcrumbs && <CustomBreadcrumbs crumbs={breadcrumbs} />}

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Box>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="body1"
              color="text.secondary"
            >
              {subtitle}
            </Typography>
          )}
        </Box>

        {actions && <Box>{actions}</Box>}
      </Box>
    </Box>
  );
};

export default PageHeader;
