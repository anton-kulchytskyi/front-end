import { type Components, type Theme } from '@mui/material/styles';

export const navigationOverrides: Components = {
  // --- APPBAR ---
  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }) => {
        const t = theme as Theme;

        return {
          backgroundColor: t.palette.background.paper,
          color: t.palette.text.primary,
          borderBottom: `1px solid ${t.palette.divider}`,
          boxShadow: '0px 2px 4px rgba(0,0,0,0.05)',
        };
      },
    },
  },

  // --- BREADCRUMBS ---
  MuiBreadcrumbs: {
    styleOverrides: {
      root: {
        marginBottom: '16px',
      },
    },
  },
};
