import type { User } from '@/types/user.types';

// Mock users data
export const mockUsers: User[] = [
  {
    id: 1,
    email: 'john.doe@example.com',
    full_name: 'John Doe',
    is_active: true,
    created_at: '2024-01-15T10:30:00Z',
    updated_at: '2024-01-15T10:30:00Z',
  },
  {
    id: 2,
    email: 'jane.smith@example.com',
    full_name: 'Jane Smith',
    is_active: true,
    created_at: '2024-01-20T14:20:00Z',
    updated_at: '2024-01-20T14:20:00Z',
  },
  {
    id: 3,
    email: 'bob.johnson@example.com',
    full_name: 'Bob Johnson',
    is_active: false,
    created_at: '2024-02-01T09:15:00Z',
    updated_at: '2024-02-01T09:15:00Z',
  },
  {
    id: 4,
    email: 'alice.williams@example.com',
    full_name: 'Alice Williams',
    is_active: true,
    created_at: '2024-02-10T16:45:00Z',
    updated_at: '2024-02-10T16:45:00Z',
  },
  {
    id: 5,
    email: 'charlie.brown@example.com',
    full_name: 'Charlie Brown',
    is_active: true,
    created_at: '2024-02-15T11:00:00Z',
    updated_at: '2024-02-15T11:00:00Z',
  },
  {
    id: 6,
    email: 'diana.davis@example.com',
    full_name: 'Diana Davis',
    is_active: true,
    created_at: '2024-03-01T13:30:00Z',
    updated_at: '2024-03-01T13:30:00Z',
  },
  {
    id: 7,
    email: 'edward.miller@example.com',
    full_name: 'Edward Miller',
    is_active: false,
    created_at: '2024-03-05T10:20:00Z',
    updated_at: '2024-03-05T10:20:00Z',
  },
  {
    id: 8,
    email: 'fiona.wilson@example.com',
    full_name: 'Fiona Wilson',
    is_active: true,
    created_at: '2024-03-10T15:10:00Z',
    updated_at: '2024-03-10T15:10:00Z',
  },
  {
    id: 9,
    email: 'george.moore@example.com',
    full_name: 'George Moore',
    is_active: true,
    created_at: '2024-03-15T09:40:00Z',
    updated_at: '2024-03-15T09:40:00Z',
  },
  {
    id: 10,
    email: 'hannah.taylor@example.com',
    full_name: 'Hannah Taylor',
    is_active: true,
    created_at: '2024-03-20T14:55:00Z',
    updated_at: '2024-03-20T14:55:00Z',
  },
  {
    id: 11,
    email: 'ivan.anderson@example.com',
    full_name: 'Ivan Anderson',
    is_active: false,
    created_at: '2024-03-25T11:25:00Z',
    updated_at: '2024-03-25T11:25:00Z',
  },
  {
    id: 12,
    email: 'julia.thomas@example.com',
    full_name: 'Julia Thomas',
    is_active: true,
    created_at: '2024-04-01T16:05:00Z',
    updated_at: '2024-04-01T16:05:00Z',
  },
];

export const usersPageContent = {
  header: {
    title: 'Users',
    subtitle: 'Browse all users in the system',
  },
  search: {
    placeholder: 'Search by name or email...',
  },
  filters: {
    status: {
      label: 'Status',
      options: [
        { value: 'all', label: 'All' },
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
      ],
    },
  },
  table: {
    columns: {
      name: 'Name',
      email: 'Email',
      status: 'Status',
      createdAt: 'Created At',
      actions: 'Actions',
    },
    status: {
      active: 'Active',
      inactive: 'Inactive',
    },
    actions: {
      view: 'View Profile',
    },
  },
  emptyState: {
    title: 'No users found',
    description:
      'Try adjusting your search or filter to find what you are looking for.',
  },
};

export const userProfilePageContent = {
  breadcrumbs: {
    users: 'Users',
  },
  sections: {
    info: {
      title: 'Profile Information',
      fields: {
        email: 'Email',
        status: 'Status',
        memberSince: 'Member Since',
        lastUpdated: 'Last Updated',
      },
      status: {
        active: 'Active',
        inactive: 'Inactive',
      },
    },
    stats: {
      title: 'Statistics',
      quizzesCompleted: 'Quizzes Completed',
      companiesJoined: 'Companies Joined',
      averageScore: 'Average Score',
      lastActivity: 'Last Activity',
    },
    activity: {
      title: 'Recent Activity',
      emptyState: 'No recent activity',
    },
  },
  notFound: {
    title: 'User Not Found',
    description:
      'The user you are looking for does not exist or has been removed.',
    action: 'Back to Users',
  },
};

// Mock user statistics
export const getUserStats = (userId: number) => ({
  quizzesCompleted: Math.floor(Math.random() * 50) + 10,
  companiesJoined: Math.floor(Math.random() * 5) + 1,
  averageScore: Math.floor(Math.random() * 30) + 70,
  lastActivity: new Date(
    Date.now() - Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000
  ).toISOString(),
});

// Mock user activity
export const getUserActivity = (userId: number) => [
  {
    id: 1,
    type: 'quiz_completed',
    title: 'Completed "JavaScript Basics" quiz',
    description: 'Score: 95/100',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 2,
    type: 'company_joined',
    title: 'Joined "Tech Corp" company',
    description: 'As a member',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 3,
    type: 'quiz_completed',
    title: 'Completed "Python Advanced" quiz',
    description: 'Score: 88/100',
    timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
  },
];
