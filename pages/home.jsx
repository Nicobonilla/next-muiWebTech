import React from 'react';
import {
  Container,
} from '@mui/material';
import { Box } from '@mui/system';
import AppBarB from '../components/AppBarB.jsx';
import DrawerLarg from '../components/DrawerLarg2.jsx';

export default function Home() {
  return (
    <>
      <AppBarB />
      <Container sx={{ ml: 0, display: { xs: 'block', sm: 'none' } }}>
        <Box sx={{ bgcolor: '#cfe8fc' }}>hola</Box>
      </Container>

      <Container sx={{ ml: 30, display: { xs: 'none', sm: 'block' } }}>
      </Container>

      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <DrawerLarg />
      </Box>
    </>
  );
}
