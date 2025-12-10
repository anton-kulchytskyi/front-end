import { Box, Typography, Chip } from '@mui/material';

import type { Company } from '../types/company.types';

type Props = {
  company: Company;
  meta: { label: string; value: string | number }[];
  status: { label: string; color: 'success' | 'warning' } | null;
};

const CompanySidebarMeta = ({ meta, status }: Props) => {
  return (
    <Box
      sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 1 }}
    >
      <Typography
        variant="h6"
        gutterBottom
      >
        Info
      </Typography>

      {status && (
        <Chip
          label={status.label}
          color={status.color}
          variant="outlined"
          sx={{ mb: 2 }}
        />
      )}

      {meta.map((item) => (
        <Box
          key={item.label}
          sx={{ mb: 1 }}
        >
          <Typography variant="subtitle2">{item.label}:</Typography>
          <Typography
            variant="body1"
            color="text.secondary"
          >
            {item.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CompanySidebarMeta;
