import { SectionPaper } from '@components/common';
import { Box, Typography } from '@mui/material';

type Step = {
  number: number;
  title: string;
  description: string;
};

type Props = {
  title: string;
  steps: Step[];
};

const AboutHowItWorksSection = ({ title, steps }: Props) => (
  <SectionPaper>
    <Typography
      variant="h5"
      gutterBottom
    >
      {title}
    </Typography>

    <Box sx={{ mt: 3 }}>
      {steps.map((step) => (
        <Box
          key={step.number}
          sx={{ mb: 3 }}
        >
          <Typography
            variant="h6"
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 32,
                height: 32,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                fontSize: '0.875rem',
                fontWeight: 600,
              }}
            >
              {step.number}
            </Box>
            {step.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ ml: 5 }}
          >
            {step.description}
          </Typography>
        </Box>
      ))}
    </Box>
  </SectionPaper>
);

AboutHowItWorksSection.displayName = 'AboutHowItWorksSection';

export default AboutHowItWorksSection;
