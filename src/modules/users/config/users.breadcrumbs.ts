import type { User } from '../types/user.types';

import {
  createListBreadcrumbs,
  createProfileBreadcrumbs,
} from '@/router/breadcrumbs/helpers';
import { ROUTES } from '@/router/routes';

export const usersListBreadcrumbConfig = createListBreadcrumbs(
  (t) => t.usersPage.title
);

export const userProfileBreadcrumbConfig = createProfileBreadcrumbs<User>(
  (t) => t.usersPage.title,
  ROUTES.USERS,
  (user, t) => user?.full_name ?? t.usersPage.profile.defaultTitle
);
