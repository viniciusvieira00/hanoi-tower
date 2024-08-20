import React from 'react';
import { Box } from '@mui/material';
import Disk from './Disk';

interface TowerProps {
  disks: number[];
}

const Tower: React.FC<TowerProps> = ({ disks }) => {
  return (
    <Box
      width={100}
      height={300}
      bgcolor="#ccc"
      display="flex"
      flexDirection="column-reverse"
      alignItems="center"
      justifyContent="flex-start"  // This ensures disks start from the bottom
      border={1}
      position="relative"
    >
      {disks.map(disk => (
        <Disk key={disk} size={disk} />
      ))}
    </Box>
  );
};

export default Tower;
