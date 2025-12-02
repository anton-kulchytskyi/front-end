import CloseIcon from '@mui/icons-material/Close';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
} from '@mui/material';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
};

const Modal = ({
  open,
  onClose,
  title,
  children,
  actions,
  maxWidth = 'sm',
  fullWidth = true,
}: ModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      PaperProps={{
        sx: {
          borderRadius: 2,
        },
      }}
    >
      <DialogTitle>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            variant="h6"
            component="span"
          >
            {title}
          </Typography>
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              color: 'text.secondary',
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      {actions && (
        <DialogActions sx={{ px: 3, py: 2 }}>{actions}</DialogActions>
      )}
    </Dialog>
  );
};

Modal.displayName = 'Modal';

export default Modal;
