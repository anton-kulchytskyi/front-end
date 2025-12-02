import { HistoryEdu } from '@mui/icons-material';
import { List } from '@mui/material';
import { type ReactNode } from 'react';

import ActivityListItem from './ActivityListItem';

import { EmptyMessage, SectionHeader } from '@/components/common';

type ActivityItem = {
  id: number;
  icon?: ReactNode;
  title: string;
  description: string;
  timestamp: string;
};

type ActivitySectionProps = {
  title: string;
  items: ActivityItem[];
  emptyStateText: string;
  formatTimestamp: (timestamp: string) => string;
};

const ActivitySection = ({
  title,
  items,
  emptyStateText,
  formatTimestamp,
}: ActivitySectionProps) => {
  return (
    <>
      <SectionHeader title={title} />
      {items.length > 0 ? (
        <List>
          {items.map((item, i) => (
            <ActivityListItem
              key={item.id}
              isLast={i === items.length - 1}
              icon={item.icon}
              title={item.title}
              description={item.description}
              timestamp={item.timestamp}
              formatTimestamp={formatTimestamp}
            />
          ))}
        </List>
      ) : (
        <EmptyMessage
          text={emptyStateText}
          icon={<HistoryEdu />}
        />
      )}
    </>
  );
};

ActivitySection.displayName = 'ActivitySection';

export default ActivitySection;
