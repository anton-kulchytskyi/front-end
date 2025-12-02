import {
  Quiz as QuizIcon,
  Business as BusinessIcon,
  People as PeopleIcon,
  Analytics as AnalyticsIcon,
  Schedule as ScheduleIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';

export const aboutPageContent = {
  header: {
    title: 'About Meduzzen',
    subtitle: 'A comprehensive quiz and company management platform',
  },
  hero: {
    title: 'Welcome to Meduzzen',
    paragraphs: [
      "Meduzzen is a modern platform designed to help companies create, manage, and track interactive quizzes for their teams. Whether you're looking to assess knowledge, conduct training, or engage employees, Meduzzen provides all the tools you need.",
      'Our platform combines powerful quiz management with comprehensive company administration features, making it easy to organize users, track performance, and generate meaningful insights.',
    ],
  },
  statistics: {
    title: 'Platform Statistics',
    items: [
      { value: '10,000+', label: 'Active Users' },
      { value: '500+', label: 'Companies' },
      { value: '5,000+', label: 'Quizzes Created' },
      { value: '100,000+', label: 'Quiz Completions' },
    ],
  },
  features: {
    title: 'Key Features',
    items: [
      {
        icon: QuizIcon,
        title: 'Quiz System',
        description:
          'Create and manage unlimited quizzes with multiple questions and answer options. Track participation and results.',
      },
      {
        icon: BusinessIcon,
        title: 'Company Management',
        description:
          'Manage companies with role-based access control. Owners and admins can invite members and manage permissions.',
      },
      {
        icon: PeopleIcon,
        title: 'User Management',
        description:
          'Comprehensive user system with authentication, profiles, and activity tracking across the platform.',
      },
      {
        icon: AnalyticsIcon,
        title: 'Analytics & Reports',
        description:
          'Detailed analytics on quiz performance, user ratings, and company statistics with exportable data.',
      },
      {
        icon: ScheduleIcon,
        title: 'Scheduled Tasks',
        description:
          'Automated notifications and reminders to keep users engaged with regular quiz participation.',
      },
      {
        icon: NotificationsIcon,
        title: 'Smart Notifications',
        description:
          'Real-time notifications for invitations, quiz updates, and important company announcements.',
      },
    ],
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      {
        number: 1,
        title: 'Create Your Company',
        description:
          "Sign up and create your company profile. You'll automatically become the owner with full administrative privileges.",
      },
      {
        number: 2,
        title: 'Invite Team Members',
        description:
          'Invite users to join your company. Assign roles and permissions to manage who can create quizzes and view analytics.',
      },
      {
        number: 3,
        title: 'Create Quizzes',
        description:
          'Build engaging quizzes with multiple questions and answer options. Set up frequency requirements and track participation.',
      },
      {
        number: 4,
        title: 'Track & Analyze',
        description:
          'Monitor quiz results, user performance, and generate detailed reports. Export data for further analysis.',
      },
    ],
  },
  techStack: {
    title: 'Technology Stack',
    description:
      'Meduzzen is built with modern technologies to ensure high performance, scalability, and an excellent user experience:',
    frontend: {
      title: 'Frontend',
      technologies: [
        'React with TypeScript',
        'Material-UI (MUI)',
        'React Router',
        'Vite Build Tool',
      ],
    },
    backend: {
      title: 'Backend',
      technologies: [
        'FastAPI (Python)',
        'PostgreSQL Database',
        'Redis Cache',
        'JWT Authentication',
      ],
    },
  },
};
