import { Typography } from '@mui/material';

import { SectionPaper } from '@/components/common';

type Props = {
  title: string;
  paragraphs: string[];
};

const AboutHeroSection = ({ title, paragraphs }: Props) => (
  <SectionPaper>
    <Typography
      variant="h5"
      gutterBottom
    >
      {title}
    </Typography>

    {paragraphs.map((p, i) => (
      <Typography
        key={i}
        variant="body1"
        sx={{ mb: 2 }}
      >
        {p}
      </Typography>
    ))}
  </SectionPaper>
);

AboutHeroSection.displayName = 'AboutHeroSection';

export default AboutHeroSection;
