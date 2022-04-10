import { AppBar, Divider, Grid } from '@mui/material';
import React from 'react';
import AppBar3 from './AppBar3';
import HeaderTop from './HeaderTop';
import LogoCotizar from './LogoCotizar';

const RespAppBar = () => {
  return (
    <AppBar
      variant="permanent"
      sx={{
        background: '#FFFFFF',
        zIndex: 'tooltip',
        display: { sx: 'block' },
      }}
      position={'static'} // sin esto el siguiente componente aparece overlapping
    >
      <HeaderTop py={1.6} />
      <LogoCotizar pt={5} pa={1.2} color={'#FFFFFF'} />
      <Grid item p={0.4}></Grid>
      <Divider />

      <AppBar3 />
    </AppBar>
  );
};

export default RespAppBar;
