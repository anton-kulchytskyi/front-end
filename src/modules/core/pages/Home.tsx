import { Box, Typography } from '@mui/material';

import ButtonLinkComponent from '@/components/ui/ButtonLinkComponent';
import { useStrings } from '@/i18n/useStrings';
import { ROUTES } from '@/router/routes';

const Home = () => {
  const { homePage } = useStrings();

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
        {homePage.welcome}
      </Typography>
      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        {homePage.subtitle}
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <ButtonLinkComponent
          variant="contained"
          color="primary"
          size="large"
          to={ROUTES.ABOUT}
        >
          {homePage.learnMore}
        </ButtonLinkComponent>
        <ButtonLinkComponent
          variant="outlined"
          color="secondary"
          size="large"
          to={ROUTES.USERS}
        >
          {homePage.viewUsers}
        </ButtonLinkComponent>
      </Box>
    </Box>
  );
};

export default Home;
