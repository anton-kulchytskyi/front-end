export const UserStatus = {
  ALL: 'all',
  ACTIVE: 'active',
  INACTIVE: 'inactive',
} as const;

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];

export const userStatusOptions = [
  { value: UserStatus.ALL, label: 'status.all' },
  { value: UserStatus.ACTIVE, label: 'status.active' },
  { value: UserStatus.INACTIVE, label: 'status.inactive' },
] as const;
