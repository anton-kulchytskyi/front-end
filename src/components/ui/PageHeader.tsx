import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Typography, Breadcrumbs } from '@mui/material';

import LinkComponent from './LinkComponent';

export type BreadcrumbItem = {
  label: string;
  to?: string;
};

type Props = {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: React.ReactNode;
};

const PageHeader = ({ title, subtitle, breadcrumbs, actions }: Props) => {
  return (
    <Box sx={{ mb: 4 }}>
      {breadcrumbs && (
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          sx={{ mb: 2 }}
        >
          {breadcrumbs.map((crumb, i) =>
            crumb.to ? (
              <LinkComponent
                key={i}
                color="inherit"
                to={crumb.to}
              >
                {crumb.label}
              </LinkComponent>
            ) : (
              <Typography
                key={i}
                color="text.primary"
              >
                {crumb.label}
              </Typography>
            )
          )}
        </Breadcrumbs>
      )}

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
