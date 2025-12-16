import { Box, type SxProps } from '@mui/material';

import SearchInput from '../ui/SearchInput';
import SelectInput from '../ui/SelectInput';

export type ListFilterOption = {
  value: string;
  label: string;
};

export type ListFiltersBlockProps = {
  search?: {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
  };
  filters?: Array<{
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: ListFilterOption[];
  }>;
  sx?: SxProps;
};

const ListFiltersBlock = ({
  search,
  filters = [],
  sx = {},
}: ListFiltersBlockProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap',
        alignItems: 'center',
        mb: 3,
        ...sx,
      }}
    >
      {/* Search */}
      {search && (
        <Box sx={{ flexGrow: 1, minWidth: 250 }}>
          <SearchInput
            value={search.value}
            onChange={search.onChange}
            placeholder={search.placeholder}
          />
        </Box>
      )}

      {/* Filters */}
      {filters.map((filter, index) => (
        <SelectInput
          key={index}
          label={filter.label}
          value={filter.value}
          onChange={filter.onChange}
          options={filter.options}
        />
      ))}
    </Box>
  );
};

export default ListFiltersBlock;
