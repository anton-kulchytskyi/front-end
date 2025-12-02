import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'grey.200',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
        >
          © {new Date().getFullYear()} Meduzzen. All rights reserved.
          {' | '}
          <Link
            href="/about"
            color="inherit"
            underline="hover"
          >
            About
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

Footer.displayName = 'Footer';

export default Footer;
