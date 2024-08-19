import React from 'react';
import { Box } from '@mui/material';

interface DiskProps {
  size: number;
}

const Disk: React.FC<DiskProps> = ({ size }) => {
  return (
    <Box
      width={`${20 + size * 10}%`}
      height={20}
      bgcolor="tomato"
      marginY={0.5}
      textAlign="center"
      color="white"
    >
      {size}
    </Box>
  );
};

export default Disk;
