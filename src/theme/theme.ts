import { createTheme } from '@mui/material/styles';

// Кольори з вашої палітри
const colors = {
  aquamarine: '#5dfdcb',
  frozenLake: '#90d7ff',
  lightCyan: '#c9f9ff',
  paleSky: '#bfd0e0',
  paleSlate: '#b8b3be',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.frozenLake, // Frozen Lake як primary
      light: colors.lightCyan,
      dark: '#5ba3cc', // Темніша версія Frozen Lake
      contrastText: '#212121',
    },
    secondary: {
      main: colors.aquamarine, // Aquamarine як secondary
      light: '#8ffdd9',
      dark: '#3dcaa0',
      contrastText: '#212121',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: colors.frozenLake,
    },
    success: {
      main: colors.aquamarine,
    },
    // Додаткові кольори з палітри
    grey: {
      100: colors.lightCyan,
      200: colors.paleSky,
      300: colors.paleSlate,
      400: '#9e9e9e',
      500: '#757575',
      600: '#616161',
      700: '#424242',
      800: '#303030',
      900: '#212121',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
      color: '#212121',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#212121',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#212121',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#212121',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
      color: '#212121',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
      color: '#212121',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          },
        },
        containedPrimary: {
          backgroundColor: colors.frozenLake,
          color: '#212121',
          '&:hover': {
            backgroundColor: '#5ba3cc',
          },
        },
        containedSecondary: {
          backgroundColor: colors.aquamarine,
          color: '#212121',
          '&:hover': {
            backgroundColor: '#3dcaa0',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
          border: `1px solid ${colors.paleSky}`,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        elevation1: {
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
          border: `1px solid ${colors.paleSky}`,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '& fieldset': {
              borderColor: colors.paleSky,
            },
            '&:hover fieldset': {
              borderColor: colors.frozenLake,
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.frozenLake,
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
        colorPrimary: {
          backgroundColor: colors.lightCyan,
          color: '#212121',
        },
        colorSecondary: {
          backgroundColor: colors.aquamarine,
          color: '#212121',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#212121',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
          borderBottom: `1px solid ${colors.paleSky}`,
        },
      },
    },
  },
});
