export interface User {
  id: number;
  email: string;
  full_name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface PaginationMeta {
  total: number;
  page: number;
  size: number;
  total_pages: number;
}

export interface UsersListResponse {
  data: User[];
  meta: PaginationMeta;
}
