import { getUserStatusMeta } from '../config/userStatus.config';
import type { User } from '../types/user.types';

import ListItemCard from '@/components/list/ListItemCard';
import { useStrings } from '@/i18n/useStrings';
import { ROUTES } from '@/router/routes';
import { formatDate } from '@/utils/formatDate';

type UserCardProps = {
  user: User;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const UserCard = ({ user, onEdit, onDelete }: UserCardProps) => {
  const { usersPage } = useStrings();

  const targetRoute = ROUTES.USER_PROFILE.replace(':id', String(user.id));

  const status = getUserStatusMeta(user.is_active, usersPage);

  const meta = [
    { label: usersPage.labels.id, value: user.id },
    { label: usersPage.labels.createdAt, value: formatDate(user.created_at) },
    { label: usersPage.labels.updatedAt, value: formatDate(user.updated_at) },
  ];

  return (
    <ListItemCard
      to={targetRoute}
      title={user.full_name}
      subtitle={user.email}
      meta={meta}
      status={status}
      actions={{
        onEdit: () => onEdit(user.id),
        onDelete: () => onDelete(user.id),
      }}
    />
  );
};

export default UserCard;
