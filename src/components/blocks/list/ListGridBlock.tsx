import { Grid, Box, Pagination } from '@mui/material';

import { EmptyState } from '@/components/common';

type ListGridBlockProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  emptyState?: {
    title: string;
    description: string;
  };
};

const ListGridBlock = <T,>({
  items,
  renderItem,
  currentPage,
  totalPages,
  onPageChange,
  emptyState,
}: ListGridBlockProps<T>) => {
  if (items.length === 0) {
    return (
      <EmptyState
        title={emptyState?.title ?? 'No items found'}
        description={emptyState?.description ?? 'Try adjusting your filters'}
      />
    );
  }

  return (
    <>
      {/* GRID */}
      <Grid
        container
        spacing={3}
      >
        {items.map((item, idx) => (
          <Grid
            key={idx}
            size={{ xs: 12, sm: 6, md: 4 }}
          >
            {renderItem(item)}
          </Grid>
        ))}
      </Grid>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(_, page) => onPageChange(page)}
            color="primary"
            size="large"
          />
        </Box>
      )}
    </>
  );
};

ListGridBlock.displayName = 'ListGridBlock';

export default ListGridBlock;
