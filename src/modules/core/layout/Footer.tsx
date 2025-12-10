import { Box, Container, Typography } from '@mui/material';

import LinkComponent from '@/components/ui/LinkComponent';
import { useStrings } from '@/i18n/useStrings';
import { ROUTES } from '@/router/routes';

const Footer = () => {
  const { footer } = useStrings();

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
          © {new Date().getFullYear()} Meduzzen — {footer.copyright}.
          {footer.separator}
          <LinkComponent
            to={ROUTES.ABOUT}
            sx={{ color: 'primary.main', textDecoration: 'none' }}
          >
            {footer.aboutLink}
          </LinkComponent>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
