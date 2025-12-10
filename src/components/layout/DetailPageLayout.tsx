import { Box, Typography, Grid, type SxProps } from '@mui/material';
import React from 'react';

import NoResultsFound from '@/components/list/NoResultsFound';
import PageHeader, { type BreadcrumbItem } from '@/components/ui/PageHeader';

interface DetailPageLayoutProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  children: React.ReactNode;
  sidebarContent?: React.ReactNode;
  actions?: React.ReactNode;
  sx?: SxProps;
  hasData: boolean;
  backToRoute: string;
  backToLabel: string;
  isLoading: boolean;
}

const DetailPageLayout: React.FC<DetailPageLayoutProps> = ({
  title,
  subtitle,
  breadcrumbs,
  children,
  sidebarContent,
  actions,
  hasData,
  backToRoute,
  backToLabel,
  isLoading,
  sx = {},
}) => {
  const mainContentSize = sidebarContent ? 8 : 12;
  const sidebarSize = 4;

  if (!hasData && !isLoading) {
    return (
      <Box sx={{ p: 0, pt: 5, textAlign: 'center' }}>
        <NoResultsFound
          action={{
            label: backToLabel,
            onClick: () => (window.location.href = backToRoute),
          }}
        />
      </Box>
    );
  }
  return (
    <Box sx={{ p: 0, ...sx }}>
      <PageHeader
        title={title}
        subtitle={subtitle}
        breadcrumbs={breadcrumbs}
        actions={actions}
      />

      <Grid
        container
        spacing={4}
        sx={{ mt: 0 }}
      >
        <Grid size={{ xs: 12, md: mainContentSize }}>{children}</Grid>

        {sidebarContent && (
          <Grid size={{ xs: 12, md: sidebarSize }}>
            <Typography variant="h6">{sidebarContent}</Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default DetailPageLayout;
