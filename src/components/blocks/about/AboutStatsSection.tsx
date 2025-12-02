import { SectionPaper } from '@components/common';
import { Box, Grid, Typography } from '@mui/material';

type Stat = { value: string | number; label: string };

type Props = {
  title: string;
  items: Stat[];
};

const AboutStatsSection = ({ title, items }: Props) => (
  <SectionPaper>
    <Typography
      variant="h5"
      gutterBottom
      sx={{ mb: 3 }}
    >
      {title}
    </Typography>

    <Grid
      container
      spacing={3}
    >
      {items.map((stat, index) => (
        <Grid
          key={index}
          size={{ xs: 12, sm: 6, md: 3 }}
        >
          <Box
            sx={{
              textAlign: 'center',
              p: 2,
              borderRadius: 2,
              bgcolor: 'grey.100',
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}
            >
              {stat.value}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {stat.label}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </SectionPaper>
);

AboutStatsSection.displayName = 'AboutStatsSection';

export default AboutStatsSection;
