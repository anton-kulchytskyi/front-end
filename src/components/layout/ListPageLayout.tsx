import { Box, Pagination, Grid } from '@mui/material';
import type { SxProps } from '@mui/material';
import React from 'react';

import NoResultsFound from '../list/NoResultsFound';

type ListPageLayoutProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  resetFilters: () => void;
  sx?: SxProps;
};

const ListPageLayout = <T,>({
  items,
  renderItem,
  page,
  totalPages,
  resetFilters,
  setPage,
  sx = {},
}: ListPageLayoutProps<T>) => {
  if (items.length === 0) {
    return (
      <NoResultsFound
        action={{
          label: 'Clear Search and Filters',
          onClick: resetFilters,
        }}
      />
    );
  }
  return (
    <Box sx={{ p: 0, ...sx }}>
      <Grid
        container
        spacing={2}
        sx={{ minHeight: '400px' }}
      >
        {items.map((item) => (
          <Grid size={{ xs: 12, md: 6 }}>{renderItem(item)}</Grid>
        ))}
      </Grid>

      {totalPages > 1 && (
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, page) => setPage(page)}
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
};

export default ListPageLayout;
