import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import type { Crumb } from '@/router/breadcrumbs/types';

type CustomBreadcrumbsProps = {
  crumbs: Crumb[];
};

const CustomBreadcrumbs = ({ crumbs }: CustomBreadcrumbsProps) => {
  if (!crumbs.length) return null;

  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
      {crumbs.map((crumb, i) =>
        crumb.to ? (
          <Link
            key={i}
            component={RouterLink}
            to={crumb.to}
            variant="breadcrumb"
          >
            {crumb.label}
          </Link>
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
  );
};

export default CustomBreadcrumbs;
