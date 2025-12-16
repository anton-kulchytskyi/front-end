import type { PaletteOptions } from '@mui/material/styles';

export const colors = {
  graphite: '#353535',
  stormyTeal: '#3c6e71',
  alabasterGrey: '#d9d9d9',
  yaleBlue: '#284b63',
  raspberryRed: '#db2955',
};

export const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: colors.stormyTeal,
    light: '#6a9c9f',
    dark: '#2a4e50',
    contrastText: '#ffffff',
  },
  secondary: {
    main: colors.yaleBlue,
    light: '#4f7288',
    dark: '#1a3244',
    contrastText: '#ffffff',
  },
  error: {
    main: colors.raspberryRed,
    light: '#ff5f7e',
    dark: '#a01d3e',
    contrastText: '#ffffff',
  },
  background: {
    default: '#f5f5f5',
    paper: '#ffffff',
  },
  text: {
    primary: colors.graphite,
    secondary: colors.yaleBlue,
  },
};

export const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: colors.stormyTeal,
    light: '#6a9c9f',
    dark: '#2a4e50',
    contrastText: '#ffffff',
  },
  secondary: {
    main: colors.alabasterGrey,
    light: '#f0f0f0',
    dark: '#a8a8a8',
    contrastText: '#000000',
  },
  error: {
    main: colors.raspberryRed,
    light: '#ff5f7e',
    dark: '#a01d3e',
    contrastText: '#ffffff',
  },
  background: {
    default: colors.graphite,
    paper: '#2a2a2a',
  },
  text: {
    primary: colors.alabasterGrey,
    secondary: colors.stormyTeal,
  },
};
