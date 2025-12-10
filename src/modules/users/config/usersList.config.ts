import { UserStatus } from '../constants/userStatus';
import type { User } from '../types/user.types';

import { createEnumFilter, createListConfig } from '@/utils/createListConfig';

export const usersListConfig = createListConfig<User, UserStatus>({
  searchKeys: ['full_name', 'email'],

  filters: {
    status: createEnumFilter<User, UserStatus>({
      mapping: {
        [UserStatus.ALL]: () => true,
        [UserStatus.ACTIVE]: (u) => u.is_active,
        [UserStatus.INACTIVE]: (u) => !u.is_active,
      },
    }),
  },

  itemsPerPage: 6,
});
