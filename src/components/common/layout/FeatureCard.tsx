import { Card, CardContent, Typography, Box } from '@mui/material';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 56,
            height: 56,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            mb: 2,
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="h6"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

FeatureCard.displayName = 'FeatureCard';

export default FeatureCard;
