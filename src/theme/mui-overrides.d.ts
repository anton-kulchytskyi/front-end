import '@mui/material/Link';
import '@mui/material/Typography';
import '@mui/material/Card';
import '@mui/material/Paper';
import type * as React from 'react';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    pageTitle: true;
    sectionTitle: true;
    breadcrumb: true;
    nav: true;
    navActive: true;
    footer: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    pageTitle: React.CSSProperties;
    sectionTitle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    pageTitle?: React.CSSProperties;
    sectionTitle?: React.CSSProperties;
  }
}

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    section: true;
    stat: true;
    feature: true;
    list: true;
  }
}

declare module '@mui/material/Card' {
  interface CardPropsVariantOverrides {
    stat: true;
    feature: true;
    list: true;
  }
}

declare module '@mui/material/Link' {
  interface LinkPropsVariantOverrides {
    breadcrumb: true;
    nav: true;
    navActive: true;
    footer: true;
  }
}
