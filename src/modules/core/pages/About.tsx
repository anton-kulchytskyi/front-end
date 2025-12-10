import { Box, Typography, Container } from '@mui/material';

import ButtonLinkComponent from '@/components/ui/ButtonLinkComponent';
import { useStrings } from '@/i18n/useStrings';
import { ROUTES } from '@/router/routes';

const About = () => {
  const { aboutPage, nav } = useStrings();

  return (
    <Container
      maxWidth="md"
      sx={{ py: 6 }}
    >
      {' '}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          color="primary.main"
        >
          {aboutPage.title}
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          {aboutPage.subtitle}
        </Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="body1"
          gutterBottom
        >
          {aboutPage.paragraph1}
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
        >
          {aboutPage.paragraph2}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 2 }}>
        <ButtonLinkComponent
          variant="contained"
          color="primary"
          size="large"
          to={ROUTES.HOME}
        >
          {aboutPage.backToHome}
        </ButtonLinkComponent>
        <ButtonLinkComponent
          variant="outlined"
          color="secondary"
          size="large"
          to={ROUTES.COMPANIES}
        >
          {nav.companies}
        </ButtonLinkComponent>
      </Box>
    </Container>
  );
};

export default About;
