import {
  Business as BusinessIcon,
  Visibility as VisibilityIcon,
  CalendarToday as CalendarIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';

import type { ConfigItem } from '@/utils/buildConfig';
import { formatDate } from '@/utils/date';

export type CompanyInfo = {
  owner: string;
  visibility: boolean;
  createdAt: string;
  updatedAt: string;
};

export const companyInfoConfig: ConfigItem<CompanyInfo>[] = [
  {
    key: 'owner',
    icon: <BusinessIcon />,
    label: 'Owner',
  },
  {
    key: 'visibility',
    icon: <VisibilityIcon />,
    label: 'Visibility',
    format: (v) => (v ? 'Visible' : 'Hidden'),
  },
  {
    key: 'createdAt',
    icon: <CalendarIcon />,
    label: 'Created At',
    format: (v) => formatDate(String(v)),
  },
  {
    key: 'updatedAt',
    icon: <ScheduleIcon />,
    label: 'Last Updated',
    format: (v) => formatDate(String(v)),
  },
];
