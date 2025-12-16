import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import {
  Box,
  Button,
  Paper,
  Typography,
  Alert,
  CircularProgress,
  Stack,
} from '@mui/material';

import type { HealthServiceKey } from '../types';
import { useHealthCheck } from '../useHealthCheck';

const HealthCheckView = () => {
  const { health, services, runCheck, runAllChecks } = useHealthCheck();

  const renderStatus = (
    status: (typeof health)[keyof typeof health],
    label: string
  ) => (
    <Box>
      <Typography
        variant="subtitle1"
        gutterBottom
        fontWeight={500}
      >
        {label}
      </Typography>

      {status.status === 'idle' && (
        <Typography
          variant="body2"
          color="text.secondary"
        >
          Not checked yet
        </Typography>
      )}

      {status.status === 'loading' && (
        <Box
          display="flex"
          alignItems="center"
          gap={1}
        >
          <CircularProgress size={20} />
          <Typography variant="body2">Checking...</Typography>
        </Box>
      )}

      {status.status === 'success' && (
        <Alert
          severity="success"
          icon={<CheckCircleIcon />}
        >
          {status.message}
        </Alert>
      )}

      {status.status === 'error' && (
        <Alert
          severity="error"
          icon={<ErrorIcon />}
        >
          {status.message}
        </Alert>
      )}
    </Box>
  );

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ mb: 3 }}
      >
        Backend Health Check
      </Typography>
      <Paper
        elevation={3}
        sx={{ p: 3 }}
      >
        <Stack
          spacing={3}
          sx={{ mb: 3 }}
        >
          {Object.entries(services).map(([key, service]) =>
            renderStatus(health[key as keyof typeof health], service.label)
          )}
        </Stack>
        <Stack
          direction="row"
          spacing={2}
        >
          <Button
            variant="contained"
            onClick={runAllChecks}
            fullWidth
          >
            Check All Services
          </Button>
          {Object.entries(services).map(([key, service]) => (
            <Button
              key={key}
              variant="outlined"
              onClick={() => runCheck(key as HealthServiceKey)}
            >
              {service.label.split(' ')[0]}
            </Button>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
};

export default HealthCheckView;
