import type { Company } from '@/types';

export const mockCompanies: Company[] = [
  {
    id: 1,
    name: 'Tech Innovators',
    description:
      'Leading technology company focused on AI and machine learning solutions.',
    is_visible: true,
    owner_id: 1,
    owner_name: 'John Doe',
    members_count: 45,
    quizzes_count: 12,
    created_at: '2024-01-10T08:00:00Z',
    updated_at: '2024-03-15T14:30:00Z',
  },
  {
    id: 2,
    name: 'Digital Solutions Inc',
    description: 'Providing cutting-edge digital transformation services.',
    is_visible: true,
    owner_id: 2,
    owner_name: 'Jane Smith',
    members_count: 32,
    quizzes_count: 8,
    created_at: '2024-01-20T10:15:00Z',
    updated_at: '2024-03-20T09:45:00Z',
  },
  {
    id: 3,
    name: 'Cloud Systems',
    description: 'Enterprise cloud infrastructure and DevOps solutions.',
    is_visible: false,
    owner_id: 4,
    owner_name: 'Alice Williams',
    members_count: 28,
    quizzes_count: 15,
    created_at: '2024-02-05T12:30:00Z',
    updated_at: '2024-03-18T16:20:00Z',
  },
  {
    id: 4,
    name: 'Data Analytics Pro',
    description: 'Advanced data analytics and business intelligence platform.',
    is_visible: true,
    owner_id: 5,
    owner_name: 'Charlie Brown',
    members_count: 56,
    quizzes_count: 20,
    created_at: '2024-02-15T09:00:00Z',
    updated_at: '2024-03-22T11:10:00Z',
  },
  {
    id: 5,
    name: 'Cybersecurity Hub',
    description:
      'Comprehensive cybersecurity solutions for modern enterprises.',
    is_visible: true,
    owner_id: 6,
    owner_name: 'Diana Davis',
    members_count: 38,
    quizzes_count: 10,
    created_at: '2024-02-20T14:45:00Z',
    updated_at: '2024-03-19T13:30:00Z',
  },
  {
    id: 6,
    name: 'Mobile Apps Studio',
    description: 'Creating innovative mobile applications for iOS and Android.',
    is_visible: true,
    owner_id: 8,
    owner_name: 'Fiona Wilson',
    members_count: 24,
    quizzes_count: 6,
    created_at: '2024-03-01T11:20:00Z',
    updated_at: '2024-03-21T10:00:00Z',
  },
  {
    id: 7,
    name: 'Blockchain Ventures',
    description:
      'Exploring blockchain technology and decentralized applications.',
    is_visible: false,
    owner_id: 9,
    owner_name: 'George Moore',
    members_count: 19,
    quizzes_count: 4,
    created_at: '2024-03-05T15:10:00Z',
    updated_at: '2024-03-17T12:45:00Z',
  },
  {
    id: 8,
    name: 'E-Learning Platform',
    description:
      'Interactive online learning and educational content delivery.',
    is_visible: true,
    owner_id: 10,
    owner_name: 'Hannah Taylor',
    members_count: 67,
    quizzes_count: 25,
    created_at: '2024-03-10T08:30:00Z',
    updated_at: '2024-03-23T15:20:00Z',
  },
];

export const companiesPageContent = {
  header: {
    title: 'Companies',
    subtitle: 'Browse all companies in the system',
  },
  search: {
    placeholder: 'Search by company name...',
  },
  filters: {
    visibility: {
      label: 'Visibility',
      options: [
        { value: 'all', label: 'All' },
        { value: 'visible', label: 'Visible' },
        { value: 'hidden', label: 'Hidden' },
      ],
    },
  },
  card: {
    owner: 'Owner',
    members: 'Members',
    quizzes: 'Quizzes',
    viewProfile: 'View Profile',
    visibility: {
      visible: 'Visible',
      hidden: 'Hidden',
    },
  },
  emptyState: {
    title: 'No companies found',
    description:
      'Try adjusting your search or filter to find what you are looking for.',
  },
};

export const companyProfilePageContent = {
  breadcrumbs: {
    companies: 'Companies',
  },
  sections: {
    info: {
      title: 'Company Information',
      fields: {
        description: 'Description',
        owner: 'Owner',
        visibility: 'Visibility',
        createdAt: 'Created At',
        lastUpdated: 'Last Updated',
      },
      visibility: {
        visible: 'Visible to all',
        hidden: 'Hidden',
      },
    },
    stats: {
      title: 'Statistics',
      members: 'Total Members',
      quizzes: 'Total Quizzes',
      activeMembers: 'Active Members',
      avgCompletion: 'Avg. Quiz Completion',
    },
    recentQuizzes: {
      title: 'Recent Quizzes',
      emptyState: 'No quizzes created yet',
      completions: 'completions',
    },
  },
  notFound: {
    title: 'Company Not Found',
    description:
      'The company you are looking for does not exist or has been removed.',
    action: 'Back to Companies',
  },
};

// Mock company statistics
export const getCompanyStats = (companyId: number) => {
  const company = mockCompanies.find((c) => c.id === companyId);
  if (!company) return null;

  return {
    members: company.members_count,
    quizzes: company.quizzes_count,
    activeMembers: Math.floor(company.members_count * 0.85),
    avgCompletion: Math.floor(Math.random() * 20) + 75,
  };
};

// Mock company quizzes
export const getCompanyQuizzes = (companyId: number) => [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    description: 'Test your knowledge of JavaScript basics',
    completions: 34,
    questions_count: 15,
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 2,
    title: 'React Advanced Patterns',
    description: 'Advanced concepts in React development',
    completions: 28,
    questions_count: 20,
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 3,
    title: 'TypeScript Best Practices',
    description: 'Learn TypeScript best practices and patterns',
    completions: 41,
    questions_count: 12,
    created_at: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
  },
];
