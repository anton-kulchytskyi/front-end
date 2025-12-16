import { type Components } from '@mui/material/styles';

import { baseOverrides } from './components/baseOverrides';
import { customVariants } from './components/customVariants';
import { linkOverrides } from './components/linkOverrides';
import { navigationOverrides } from './components/navigationOverrides';

export const components: Components = {
  ...baseOverrides,
  ...customVariants,
  ...linkOverrides,
  ...navigationOverrides,
};
