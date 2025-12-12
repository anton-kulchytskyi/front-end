import type { User } from '../types/user.types';

import {
  createListBreadcrumbs,
  createProfileBreadcrumbs,
} from '@/router/breadcrumbs/helpers';
import { ROUTES } from '@/router/routes';

export const usersListBreadcrumbConfig = createListBreadcrumbs((t) =>
  t('title')
);

export const userProfileBreadcrumbConfig = createProfileBreadcrumbs<User>(
  (t) => t('title'),
  ROUTES.USERS,
  (t, user) => user?.full_name ?? t('profile.defaultTitle')
);
