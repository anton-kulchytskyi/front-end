import { Grid, Typography } from '@mui/material';

import { FeatureCard, SectionPaper } from '@/components/common';

type Feature = {
  title: string;
  description: string;
  icon: React.ElementType;
};

type Props = {
  title: string;
  items: Feature[];
};

const AboutFeaturesSection = ({ title, items }: Props) => (
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
      {items.map((f, i) => (
        <Grid
          key={i}
          size={{ xs: 12, sm: 6, md: 4 }}
        >
          <FeatureCard
            icon={<f.icon fontSize="large" />}
            title={f.title}
            description={f.description}
          />
        </Grid>
      ))}
    </Grid>
  </SectionPaper>
);

AboutFeaturesSection.displayName = 'AboutFeaturesSection';

export default AboutFeaturesSection;
