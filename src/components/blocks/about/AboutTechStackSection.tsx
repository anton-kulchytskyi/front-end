import { SectionPaper } from '@components/common';
import { Box, Grid, Typography } from '@mui/material';

type TechStack = {
  title: string;
  description: string;
  frontend: { title: string; technologies: string[] };
  backend: { title: string; technologies: string[] };
};

type Props = {
  techStack: TechStack;
};

const AboutTechStackSection = ({ techStack }: Props) => (
  <SectionPaper sx={{ mb: 0 }}>
    <Typography
      variant="h5"
      gutterBottom
    >
      {techStack.title}
    </Typography>

    <Typography
      variant="body1"
      sx={{ mb: 2 }}
    >
      {techStack.description}
    </Typography>

    <Grid
      container
      spacing={2}
      sx={{ mt: 2 }}
    >
      {[techStack.frontend, techStack.backend].map((section, i) => (
        <Grid
          key={i}
          size={{ xs: 12, sm: 6 }}
        >
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600 }}
            gutterBottom
          >
            {section.title}
          </Typography>

          {section.technologies.map((tech, j) => (
            <Box
              key={j}
              sx={{ color: 'text.secondary' }}
            >
              • {tech}
            </Box>
          ))}
        </Grid>
      ))}
    </Grid>
  </SectionPaper>
);

AboutTechStackSection.displayName = 'AboutTechStackSection';

export default AboutTechStackSection;
