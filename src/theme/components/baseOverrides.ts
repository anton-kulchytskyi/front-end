import { type Components, type Theme } from '@mui/material/styles';

export const baseOverrides: Components = {
  // --- BUTTON ---
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        fontWeight: 600,
        padding: '8px 16px',
        textTransform: 'none',
      },
    },
  },

  // --- TEXTFIELD ---
  MuiTextField: {
    styleOverrides: {
      root: (props) => {
        const theme = props.theme as Theme;

        return {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '& fieldset': {
              borderColor: theme.palette.text.secondary,
            },
            '&:hover fieldset': {
              borderColor: theme.palette.primary.main,
            },
            '&.Mui-focused fieldset': {
              borderColor: theme.palette.primary.main,
            },
          },
        };
      },
    },
  },
};
