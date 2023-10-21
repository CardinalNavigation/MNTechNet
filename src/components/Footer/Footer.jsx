import React from 'react';
import { Box } from '@mui/joy';
import {Typography } from '@mui/material';

function Footer() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" sx={{ m: 3, p: 3 }}>
      <Typography variant='h7'>&copy; Matthew Johnson</Typography>
    </Box>

  );
}

export default Footer;
