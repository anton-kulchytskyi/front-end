import { Box, Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

import ButtonLinkComponent from '@/components/ui/ButtonLinkComponent';
import { ROUTES } from '@/router/routes';

const About = () => {
  const { t } = useTranslation('aboutPage');

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
          {t('title')}
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          {t('subtitle')}
        </Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        {[t('paragraph1'), t('paragraph2')].map((p, i) => (
          <Typography
            key={i}
            variant="body1"
            gutterBottom
          >
            {p}
          </Typography>
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 2 }}>
        <ButtonLinkComponent
          variant="contained"
          color="primary"
          size="large"
          to={ROUTES.HOME}
        >
          {t('backToHome')}
        </ButtonLinkComponent>
        <ButtonLinkComponent
          variant="outlined"
          color="secondary"
          size="large"
          to={ROUTES.COMPANIES}
        >
          {t('cta')}
        </ButtonLinkComponent>
      </Box>
    </Container>
  );
};

export default About;
