export const en = {
  general: {
    noResultsTitle: 'No results found',
    noResultsDescription:
      'Please adjust your search term or filter criteria and try again.',
  },
  nav: {
    home: 'Home',
    about: 'About',
    users: 'Users',
    companies: 'Companies',
    signIn: 'Sign In',
  },

  homePage: {
    welcome: 'Welcome to Meduzzen',
    subtitle: 'Quiz and Company Management System',
    learnMore: 'Learn More',
    viewUsers: 'View Users',
  },

  aboutPage: {
    title: 'About Meduzzen',
    subtitle:
      'Your platform for interactive quizzes and efficient company management.',
    paragraph1:
      'Meduza is designed to streamline your business operations and enhance employee engagement through dynamic quizzes. Our intuitive interface allows you to easily create, manage, and assign quizzes, track performance, and gain valuable insights.',
    paragraph2:
      'Whether you are looking to onboard new employees, assess existing skills, or simply foster a fun learning environment, Meduzzen provides the tools you need to succeed. Discover a smarter way to manage your company and empower your team.',
    backToHome: 'Back to Home',
  },

  usersPage: {
    title: 'Users',
    subtitle: 'Manage and view all registered users in the system.',
    navigation: {
      backToUsers: 'Return to users list',
    },
    actions: {
      edit: 'Edit',
      delete: 'Delete',
      createUser: 'Create New User',
    },
    filters: {
      searchPlaceholder: 'Search by name or email...',
      role: 'Filter by Role',
      status: 'Status',
    },
    status: {
      all: 'All',
      active: 'Active',
      inactive: 'Inactive',
    },
    labels: {
      createdAt: 'Created',
      updatedAt: 'Updated',
      id: 'ID',
    },
    roles: {
      admin: 'Administrator',
      owner: 'Owner',
      member: 'Member',
      user: 'User',
    },
    profile: {
      defaultTitle: 'Loading user...',
    },
  },

  companiesPage: {
    title: 'Companies',
    subtitle: 'Browse all companies in the system.',

    navigation: {
      backToCompanies: 'Return to company list',
    },

    actions: {
      createCompany: 'Create New Company',
      edit: 'Edit',
      delete: 'Delete',
    },

    filters: {
      searchPlaceholder: 'Search by company name...',
      visibility: 'Visibility',
    },

    status: {
      all: 'All',
      visible: 'Visible',
      hidden: 'Hidden',
    },

    labels: {
      createdAt: 'Created',
      updatedAt: 'Updated',
      id: 'ID',
      owner: 'Owner',
    },

    profile: {
      defaultTitle: 'Loading company...',
    },
  },

  footer: {
    copyright: 'All rights reserved',
    aboutLink: 'About',
    separator: ' · ',
  },
};

export type TranslationSchema = typeof en;
