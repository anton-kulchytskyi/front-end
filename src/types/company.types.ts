export interface Company {
  id: number;
  name: string;
  description: string;
  is_visible: boolean;
  owner_id: number;
  owner_name: string;
  members_count: number;
  quizzes_count: number;
  created_at: string;
  updated_at: string;
}
