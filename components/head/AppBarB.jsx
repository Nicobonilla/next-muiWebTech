import React, { useState, useEffect } from 'react'
import { Box, Grid, AppBar } from '@mui/material';
import DrawerPersist from './drawer/DrawerPersist';
import Logo from './Logo';
import { useWindowSize } from '../hooks/useWindowSize';
import { positions } from '@mui/system';

export default function Appbar2() {
    const { width, heigth } = useWindowSize()
    const isMatch = () => (width < 600 ? true : false);
    const [ open, setOpen ] = useState(isMatch())

    useEffect(() => {
        setOpen(open);
      }, [open]);


  return (
    <React.Fragment>
      <AppBar 
        variant="permanent"
        sx={{
          background: '#000000', zIndex: 'tooltip', display:{sx:'block', sm:'none'} 
        }}
      >
        <Grid container spacing={2} >
          <Grid item xs={2}>
            <Box sx={{ ml: 2 }}>
              <DrawerPersist/>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Logo />
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </AppBar>
    </React.Fragment>
  );
}

