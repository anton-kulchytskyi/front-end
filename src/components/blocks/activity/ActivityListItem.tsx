import { ListItem, ListItemText, Box } from '@mui/material';
import { type ReactNode } from 'react';

type ActivityListItemProps = {
  isLast: boolean;
  icon?: ReactNode;
  title: string;
  description: string;
  timestamp: string;
  formatTimestamp: (timestamp: string) => string;
};

const ActivityListItem = ({
  isLast,
  icon,
  title,
  description,
  timestamp,
  formatTimestamp,
}: ActivityListItemProps) => {
  return (
    <ListItem
      sx={{
        borderBottom: isLast ? 'none' : '1px solid',
        borderColor: 'grey.200',
        px: 0,
      }}
    >
      {icon && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            mr: 2,
          }}
        >
          {icon}
        </Box>
      )}

      <ListItemText
        primary={title}
        secondary={
          <>
            {description}
            {' • '}
            {formatTimestamp(timestamp)}
          </>
        }
        slotProps={{
          primary: {
            fontWeight: 500,
          },
        }}
      />
    </ListItem>
  );
};

ActivityListItem.displayName = 'ActivityListItem';
export default ActivityListItem;
