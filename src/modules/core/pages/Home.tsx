import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import ButtonLinkComponent from '@/components/ui/ButtonLinkComponent';
import { ROUTES } from '@/router/routes';

const Home = () => {
  const { t } = useTranslation('homePage');

  return (
    <Box
      sx={{
        textAlign: 'center',
        bgcolor: 'background.default',
        py: 8,
        minHeight: '60vh',
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        color="primary.main"
      >
        {t('welcome')}
      </Typography>
      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        {t('subtitle')}
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <ButtonLinkComponent
          variant="contained"
          color="primary"
          size="large"
          to={ROUTES.ABOUT.path}
        >
          {t('learnMore')}
        </ButtonLinkComponent>
        <ButtonLinkComponent
          variant="outlined"
          color="secondary"
          size="large"
          to={ROUTES.USERS.path}
        >
          {t('cta')}
        </ButtonLinkComponent>
      </Box>
    </Box>
  );
};

export default Home;
