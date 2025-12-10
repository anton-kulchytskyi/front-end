import { type Components, type Theme } from '@mui/material/styles';

export const linkOverrides: Components = {
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: 'none',
        cursor: 'pointer',
        fontWeight: 500,
        padding: '8px 12px',
        transition: 'color 0.2s ease, background-color 0.2s ease',
      },
    },

    variants: [
      // NAVIGATION LINK
      {
        props: { variant: 'nav' },
        style: ({ theme }) => {
          const t = theme as Theme;

          return {
            borderRadius: 8,
            color: t.palette.primary.main,
            '&:hover': {
              backgroundColor: t.palette.action.hover,
            },
          };
        },
      },

      // ACTIVE NAV LINK
      {
        props: { variant: 'navActive' },
        style: ({ theme }) => {
          const t = theme as Theme;

          return {
            fontWeight: 700,
            color: t.palette.primary.dark,
            backgroundColor: t.palette.primary.light + '33',
            borderRadius: 8,
          };
        },
      },

      // FOOTER LINK
      {
        props: { variant: 'footer' },
        style: ({ theme }) => {
          const t = theme as Theme;

          return {
            color: t.palette.text.secondary,
            '&:hover': {
              color: t.palette.primary.main,
            },
          };
        },
      },
    ],
  },
};
