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
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import LanguageSelector from './LanguageSelector';

import ButtonLinkComponent from '@/components/ui/ButtonLinkComponent';
import LinkComponent from '@/components/ui/LinkComponent';
import { getNavigationItems } from '@/router/breadcrumbs/helpers';
import { ROUTES } from '@/router/routes';
import { useThemeMode } from '@/theme/context/ThemeContext';

const Header = () => {
  const location = useLocation();
  const { mode, toggleColorMode } = useThemeMode();
  const { t } = useTranslation('nav');

  const DESKTOP_BREAKPOINT = 'md';

  const NAV_ITEMS = getNavigationItems();

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
            to={ROUTES.HOME.path}
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
                  {t(item.translationKey)}
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
            {t('signIn')}
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
