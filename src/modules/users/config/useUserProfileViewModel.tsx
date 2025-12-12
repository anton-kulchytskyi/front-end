import { fetchUserById } from '../api/user.api';
import { UserSidebarMeta } from '../components/UserSidebarMeta';
import type { User } from '../types/user.types';

import { userProfileBreadcrumbConfig } from './users.breadcrumbs';

import { ProfileSkeleton } from '@/components/skeletons/ProfileSkeleton';
import { useProfile } from '@/hooks/useProfile';
import type { AnyTFunction } from '@/i18n/types';
import { useBreadcrumbs } from '@/router/breadcrumbs/useBreadcrumbs';
import { ROUTES } from '@/router/routes';

export const useUserProfileViewModel = (t: AnyTFunction) => {
  const { data: user, isLoading, error } = useProfile<User>(fetchUserById);

  const hasData = !!user && !error;

  const breadcrumbs = useBreadcrumbs<User>(
    userProfileBreadcrumbConfig,
    t,
    user
  );

  const title = hasData ? user.full_name : t('profile.defaultTitle');
  const subtitle =
    hasData && user
      ? `ID: ${user.id} | ${user.is_active ? t('status.active') : t('status.inactive')}`
      : undefined;

  let content;
  let sidebar;

  if (isLoading) {
    content = <ProfileSkeleton />;
  } else if (hasData) {
    content = (
      <>
        <strong>Email:</strong> {user.email}
      </>
    );

    sidebar = <UserSidebarMeta user={user} />;
  }

  return {
    user,
    isLoading,
    hasData,
    title,
    subtitle,
    breadcrumbs,
    sidebar,
    content,
    backToRoute: ROUTES.USERS,
    actions: {
      canEdit: hasData,
      canDelete: hasData,
    },
  };
};
