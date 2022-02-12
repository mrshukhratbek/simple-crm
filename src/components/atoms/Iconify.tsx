// icons
import { Icon } from '@iconify/react';
// @mui
import { Box } from '@mui/material';
import React from 'react';

type Props = {
  icon: any;
  sx?: any;
};

const Iconify: React.FC<Props> = ({ icon, sx, ...other }) => {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
};

export default Iconify;
