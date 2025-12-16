import { Link as MuiLink, type LinkProps } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

type Props = LinkProps & {
  to: string;
};

const LinkComponent = ({ to, children, ...props }: Props) => {
  return (
    <MuiLink
      component={RouterLink}
      to={to}
      {...props}
    >
      {children}
    </MuiLink>
  );
};

export default LinkComponent;
