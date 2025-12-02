import { Card, type SxProps } from '@mui/material';

type BaseCardProps = {
  children: React.ReactNode;
  onClick?: () => void;
  sx?: SxProps;
  hoverable?: boolean; // Якщо true — анімація hover
};

const BaseCard = ({
  children,
  onClick,
  sx = {},
  hoverable = true,
}: BaseCardProps) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        transition: 'all 0.25s ease',
        cursor: onClick ? 'pointer' : 'default',
        boxShadow: '0px 2px 8px rgba(0,0,0,0.08)',
        border: (theme) => `1px solid ${theme.palette.grey[200]}`,
        ...(hoverable && {
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0px 6px 20px rgba(0,0,0,0.12)',
          },
        }),
        ...sx,
      }}
    >
      {children}
    </Card>
  );
};

BaseCard.displayName = 'BaseCard';

export default BaseCard;
