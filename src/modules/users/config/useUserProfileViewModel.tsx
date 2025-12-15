import { fetchUserById } from '../api/user.api';
import { UserSidebarMeta } from '../components/UserSidebarMeta';
import type { User } from '../types/user.types';

import { ProfileSkeleton } from '@/components/skeletons/ProfileSkeleton';
import { useProfile } from '@/hooks/useProfile';
import type { AnyTFunction } from '@/i18n/types';
import { ROUTES } from '@/router/routes';

export const useUserProfileViewModel = (t: AnyTFunction) => {
  const { data: user, isLoading, error } = useProfile<User>(fetchUserById);

  const hasData = !!user && !error;

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
    sidebar,
    content,
    backToRoute: ROUTES.USERS,
    actions: {
      canEdit: hasData,
      canDelete: hasData,
    },
  };
};
