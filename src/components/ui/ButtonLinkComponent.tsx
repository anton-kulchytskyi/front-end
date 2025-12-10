import { Button, type ButtonProps } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

type ButtonLinkProps = ButtonProps & {
  to: string;
};

const ButtonLinkComponent = ({
  to,
  children,
  variant = 'contained',
  ...rest
}: ButtonLinkProps) => {
  return (
    <Button
      component={RouterLink}
      to={to}
      variant={variant}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ButtonLinkComponent;
