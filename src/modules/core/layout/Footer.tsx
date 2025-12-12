import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import LinkComponent from '@/components/ui/LinkComponent';
import { ROUTES } from '@/router/routes';

const Footer = () => {
  const { t } = useTranslation('footer');

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 'auto',
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
        >
          © {new Date().getFullYear()} Meduzzen — {t('copyright')}.
          {t('separator')}
          <LinkComponent
            to={ROUTES.ABOUT}
            sx={{ color: 'primary.main', textDecoration: 'none' }}
          >
            {t('aboutLink')}
          </LinkComponent>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
