import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { NAV_ROUTES } from '../router/routes';

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              mr: 4,
              fontWeight: 700,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            Meduzzen
          </Typography>

          <Box sx={{ flexGrow: 1, display: 'flex', gap: 1 }}>
            {NAV_ROUTES.filter((route) => route.showInNav).map((route) => (
              <Button
                key={route.path}
                component={RouterLink}
                to={route.path}
                sx={{
                  color: 'text.primary',
                  fontWeight: location.pathname === route.path ? 600 : 400,
                  bgcolor:
                    location.pathname === route.path
                      ? 'rgba(144, 215, 255, 0.15)'
                      : 'transparent',
                  '&:hover': {
                    bgcolor: 'rgba(144, 215, 255, 0.25)',
                  },
                }}
              >
                {route.label}
              </Button>
            ))}
          </Box>

          <Button
            variant="contained"
            color="primary"
            sx={{ ml: 2 }}
          >
            Sign In
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

Navbar.displayName = 'Navbar';

export default Navbar;
