export type RouteConfig = {
  path: string;
  label: string;
  showInNav?: boolean;
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  USERS: '/users',
  USER_PROFILE: '/users/:id',
  COMPANIES: '/companies',
  COMPANY_PROFILE: '/companies/:id',
} as const;

export const NAV_ROUTES: RouteConfig[] = [
  { path: ROUTES.HOME, label: 'Home', showInNav: true },
  { path: ROUTES.ABOUT, label: 'About', showInNav: true },
  { path: ROUTES.USERS, label: 'Users', showInNav: true },
  { path: ROUTES.COMPANIES, label: 'Companies', showInNav: true },
];
