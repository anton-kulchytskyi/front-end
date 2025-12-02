import { Paper, type PaperProps } from '@mui/material';

type SectionPaperProps = PaperProps & {
  children: React.ReactNode;
};

const SectionPaper = ({ children, sx, ...props }: SectionPaperProps) => {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 3,
        mb: 3,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Paper>
  );
};

SectionPaper.displayName = 'SectionPaper';

export default SectionPaper;
