import {
  People as PeopleIcon,
  Quiz as QuizIcon,
  CheckCircle as CheckCircleIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';

import type { ConfigItem } from '@/utils/buildConfig';

export type CompanyStats = {
  members: number;
  quizzes: number;
  activeMembers: number;
  avgCompletion: number;
};

export const companyStatsConfig: ConfigItem<CompanyStats>[] = [
  {
    key: 'members',
    icon: <PeopleIcon />,
    label: 'Members',
  },
  {
    key: 'quizzes',
    icon: <QuizIcon />,
    label: 'Quizzes',
  },
  {
    key: 'activeMembers',
    icon: <CheckCircleIcon />,
    label: 'Active Members',
  },
  {
    key: 'avgCompletion',
    icon: <TrendingUpIcon />,
    label: 'Avg Completion',
    format: (v) => `${v}%`,
  },
];
