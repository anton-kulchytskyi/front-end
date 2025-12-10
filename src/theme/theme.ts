import { createTheme } from '@mui/material/styles';

import { components } from './components';
import { darkPalette, lightPalette } from './palette';
import { typography } from './typography';

export const lightTheme = createTheme({
  spacing: 8,
  palette: lightPalette,
  typography,
  shape: {
    borderRadius: 12,
  },
  components,
});

export const darkTheme = createTheme({
  spacing: 8,
  palette: darkPalette,
  typography,
  shape: {
    borderRadius: 12,
  },
  components,
});
