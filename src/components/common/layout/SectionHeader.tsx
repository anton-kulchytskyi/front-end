import { Typography, Box } from '@mui/material';

type SectionHeaderProps = {
  title: string;
  actions?: React.ReactNode;
};

const SectionHeader = ({ title, actions }: SectionHeaderProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 2,
      }}
    >
      <Typography
        variant="h6"
        fontWeight={600}
      >
        {title}
      </Typography>

      {actions && <Box>{actions}</Box>}
    </Box>
  );
};

SectionHeader.displayName = 'SectionHeader';
export default SectionHeader;
