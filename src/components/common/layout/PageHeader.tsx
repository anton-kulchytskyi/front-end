import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Typography, Breadcrumbs, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

type BreadcrumbItem = {
  label: string;
  path?: string;
};

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: React.ReactNode;
};

const PageHeader = ({
  title,
  subtitle,
  breadcrumbs,
  actions,
}: PageHeaderProps) => {
  return (
    <Box sx={{ mb: 4 }}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          sx={{ mb: 2 }}
        >
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return isLast || !crumb.path ? (
              <Typography
                key={index}
                color="text.primary"
              >
                {crumb.label}
              </Typography>
            ) : (
              <Link
                key={index}
                component={RouterLink}
                to={crumb.path}
                color="inherit"
                underline="hover"
              >
                {crumb.label}
              </Link>
            );
          })}
        </Breadcrumbs>
      )}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        flexWrap="wrap"
        gap={2}
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

PageHeader.displayName = 'PageHeader';

export default PageHeader;
