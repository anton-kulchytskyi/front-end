import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Card, Box, Typography, IconButton, Chip, Stack } from '@mui/material';
import React from 'react';

import LinkComponent from '../ui/LinkComponent';

type MetaItem = {
  label: string;
  value: string | number | React.ReactNode;
};

type StatusMeta = {
  label: string;
  color: 'success' | 'warning' | 'error' | 'default' | 'primary' | 'info';
};

type ListItemCardProps = {
  title: string;
  subtitle?: string;
  meta?: MetaItem[];
  status?: StatusMeta;
  rightContent?: React.ReactNode;
  actions?: {
    onEdit?: () => void;
    onDelete?: () => void;
    custom?: React.ReactNode;
  };
  to?: string;
};

const ListItemCard = ({
  title,
  subtitle,
  meta = [],
  status,
  rightContent,
  actions,
  to,
}: ListItemCardProps) => {
  const cardContent = (
    <Card
      variant="outlined"
      sx={{
        mb: 2,
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&:hover': {
          boxShadow: to ? 3 : undefined,
          cursor: to ? 'pointer' : 'default',
        },
      }}
    >
      {/* LEFT SIDE */}
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          sx={{ mb: 0.5 }}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            variant="body2"
            sx={{ mb: 1 }}
            color="text.secondary"
          >
            {subtitle}
          </Typography>
        )}

        <Stack
          direction="row"
          spacing={2}
          flexWrap="wrap"
          sx={{ fontSize: '0.9rem' }}
        >
          {meta.map((item, i) => (
            <Typography
              key={i}
              variant="body2"
              color="text.secondary"
            >
              <strong>{item.label}:</strong> {item.value}
            </Typography>
          ))}

          {status && (
            <Chip
              label={status.label}
              color={status.color}
              variant="outlined"
              size="small"
            />
          )}
        </Stack>
      </Box>

      {/* RIGHT SIDE CONTENT */}
      {rightContent && <Box sx={{ ml: 2 }}>{rightContent}</Box>}

      {/* ACTIONS */}
      {(actions?.onEdit || actions?.onDelete || actions?.custom) && (
        <Box
          sx={{ display: 'flex', gap: 1, ml: 2 }}
          onClick={(e) => e.stopPropagation()}
        >
          {actions.custom}

          {actions.onEdit && (
            <IconButton
              size="small"
              color="primary"
              onClick={actions.onEdit}
            >
              <EditIcon />
            </IconButton>
          )}

          {actions.onDelete && (
            <IconButton
              size="small"
              color="error"
              onClick={actions.onDelete}
            >
              <DeleteIcon />
            </IconButton>
          )}
        </Box>
      )}
    </Card>
  );

  return to ? (
    <LinkComponent
      to={to}
      sx={{ display: 'block' }}
    >
      {cardContent}
    </LinkComponent>
  ) : (
    cardContent
  );
};

export default ListItemCard;
