import { useTranslation } from 'react-i18next';

import {
  getUserMetaData,
  getUserStatusMeta,
} from '../config/userStatus.config';
import type { User } from '../types/user.types';

import ListItemCard from '@/components/list/ListItemCard';
import { ROUTES } from '@/router/routes';

type UserCardProps = {
  user: User;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const UserCard = ({ user, onEdit, onDelete }: UserCardProps) => {
  const { t } = useTranslation('usersPage');

  const targetRoute = ROUTES.USER_PROFILE.path.replace(':id', String(user.id));

  const status = getUserStatusMeta(user.is_active, t);

  const meta = getUserMetaData(user, t);

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
