import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import { useLocation } from 'react-router-dom';

import LanguageSelector from './LanguageSelector';

import ButtonLinkComponent from '@/components/ui/ButtonLinkComponent';
import LinkComponent from '@/components/ui/LinkComponent';
import { useStrings } from '@/i18n/useStrings';
import { ROUTES } from '@/router/routes';
import { useThemeMode } from '@/theme/context/ThemeContext';

const Header = () => {
  const location = useLocation();
  const { mode, toggleColorMode } = useThemeMode();
  const { nav } = useStrings();

  const DESKTOP_BREAKPOINT = 'md';

  const NAV_ITEMS = [
    { path: ROUTES.HOME, label: nav.home },
    { path: ROUTES.ABOUT, label: nav.about },
    { path: ROUTES.USERS, label: nav.users },
    { path: ROUTES.COMPANIES, label: nav.companies },
  ];

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ gap: 2 }}
        >
          {/* Logo */}
          <Typography
            variant="h6"
            component={LinkComponent}
            to={ROUTES.HOME}
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              textDecoration: 'none',
              color: 'text.primary',
              mr: 4,
            }}
          >
            Meduzzen
          </Typography>

          {/* Navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', [DESKTOP_BREAKPOINT]: 'flex' },
              gap: 1,
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <LinkComponent
                  key={item.path}
                  to={item.path}
                  variant={isActive ? 'navActive' : 'nav'}
                >
                  {item.label}
                </LinkComponent>
              );
            })}
          </Box>

          <IconButton
            sx={{ ml: 1 }}
            onClick={toggleColorMode}
            color="inherit"
          >
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          {/* Language Switch */}
          <LanguageSelector />

          {/* Auth Button */}
          <ButtonLinkComponent
            to="/login"
            variant="contained"
          >
            {nav.signIn}
          </ButtonLinkComponent>
          <Box sx={{ display: { xs: 'flex', [DESKTOP_BREAKPOINT]: 'none' } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
