import { MOCK_USERS } from '../data/users.data';
import type { User } from '../types/user.types';

export const fetchUserById = async (id: number): Promise<User | null> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return MOCK_USERS.find((u) => u.id === id) || null;
};

export const fetchAllUsers = async (): Promise<User[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return MOCK_USERS;
};
