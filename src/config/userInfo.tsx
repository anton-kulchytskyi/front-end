import {
  Email as EmailIcon,
  CalendarToday as CalendarIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';

import type { ConfigItem } from '@/utils/buildConfig';
import { formatDate } from '@/utils/date';

export type UserInfo = {
  email: string;
  createdAt: string;
  updatedAt: string;
};

export const userInfoConfig: ConfigItem<UserInfo>[] = [
  {
    key: 'email',
    icon: <EmailIcon />,
    label: 'Email',
  },
  {
    key: 'createdAt',
    icon: <CalendarIcon />,
    label: 'Member Since',
    format: (v) => formatDate(String(v)),
  },
  {
    key: 'updatedAt',
    icon: <ScheduleIcon />,
    label: 'Last Updated',
    format: (v) => formatDate(String(v)),
  },
];
