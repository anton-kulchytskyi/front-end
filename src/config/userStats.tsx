import {
  Quiz as QuizIcon,
  Business as BusinessIcon,
  TrendingUp as TrendingUpIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';

import type { ConfigItem } from '@/utils/buildConfig';
import { getRelativeTime } from '@/utils/date';

export type UserStats = {
  quizzesCompleted: number;
  companiesJoined: number;
  averageScore: number;
  lastActivity: string;
};

export const userStatsConfig: ConfigItem<UserStats>[] = [
  {
    key: 'quizzesCompleted',
    icon: <QuizIcon />,
    label: 'Quizzes Completed',
  },
  {
    key: 'companiesJoined',
    icon: <BusinessIcon />,
    label: 'Companies Joined',
  },
  {
    key: 'averageScore',
    icon: <TrendingUpIcon />,
    label: 'Average Score',
    format: (v) => `${v}%`,
  },
  {
    key: 'lastActivity',
    icon: <ScheduleIcon />,
    label: 'Last Activity',
    format: (v) => getRelativeTime(String(v)),
  },
];
