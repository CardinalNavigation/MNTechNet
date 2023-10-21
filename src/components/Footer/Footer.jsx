import React from 'react';
import './Footer.css';
import { Box } from '@mui/joy';
import { Paper, Typography } from '@mui/material';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" sx={{ m: 3, p: 3 }}>
      <Typography variant='h7'>&copy; Matthew Johnson</Typography>
    </Box>

  );
}

export default Footer;
