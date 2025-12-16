import { type Components, type Theme } from '@mui/material/styles';

export const customVariants: Components = {
  // --- PAGE HEADER TYPOGRAPHY VARIANT ---
  MuiTypography: {
    variants: [
      {
        props: { variant: 'pageTitle' },
        style: {
          fontSize: '2rem',
          fontWeight: 700,
          marginBottom: '8px',
        },
      },
      {
        props: { variant: 'sectionTitle' },
        style: {
          fontSize: '1.25rem',
          fontWeight: 600,
          marginBottom: '12px',
        },
      },
    ],
  },

  // --- PAPER: SECTION WRAPPER ---
  MuiPaper: {
    variants: [
      {
        props: { variant: 'section' },
        style: ({ theme }) => {
          const t = theme as Theme;

          return {
            padding: '24px',
            marginBottom: '24px',
            borderRadius: 12,
            border: `1px solid ${t.palette.text.secondary}`,
            backgroundColor: t.palette.background.paper,
          };
        },
      },
    ],
  },

  // --- CARD VARIANTS ---
  MuiCard: {
    variants: [
      {
        props: { variant: 'stat' },
        style: ({ theme }) => {
          const t = theme as Theme;

          return {
            padding: '16px',
            borderRadius: 12,
            backgroundColor: t.palette.secondary.light,
            border: `1px solid ${t.palette.text.secondary}`,
          };
        },
      },
      {
        props: { variant: 'feature' },
        style: ({ theme }) => {
          const t = theme as Theme;

          return {
            padding: '20px',
            textAlign: 'center',
            borderRadius: 12,
            backgroundColor: t.palette.background.paper,
            border: `1px solid ${t.palette.text.secondary}`,
          };
        },
      },
      {
        props: { variant: 'list' },
        style: ({ theme }) => {
          const t = theme as Theme;

          return {
            padding: t.spacing(1),
            marginBottom: t.spacing(2),
            border: `1px solid ${t.palette.divider}`,
            transition: t.transitions.create('box-shadow', {
              duration: t.transitions.duration.short,
            }),
            '&:hover': {
              boxShadow: t.shadows[3],
            },
          };
        },
      },
    ],
  },
};
