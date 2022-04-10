import React, { useState, useEffect } from 'react';
import { Box, Grid, AppBar, Typography } from '@mui/material';
import DrawerPersist from './DrawerPersist';
import Image from 'next/image';

import { useWindowSize } from '../hooks/useWindowSize';
import { positions } from '@mui/system';
import NavMenu2 from './NavMenu3';

export default function Appar2() {
  const { width, heigth } = useWindowSize();
  const isMatch = () => (width < 600 ? true : false);
  const [open, setOpen] = useState(isMatch());

  useEffect(() => {
    setOpen(open);
  }, [open]);

  return (
    <React.Fragment>
      <AppBar
        variant="permanent"
        sx={{
          background: '#FFFFFF',
          zIndex: 'tooltip',
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <Typography variant="body" sx={{ color: 'black' }}>
              Telefono
            </Typography>{' '}
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ ml: 3, display: { xs: 'block', sm: 'none' } }}>
              <DrawerPersist />
            </Box>
          </Grid>

          <Grid item xs={4}></Grid>

          <Grid item xs={4} sx={{mt:-3}}>
            {' '}
            <Image
              src="/imagenes/logo.png"
              alt="Picture of the author"
              width={150}
              height={150}
            />
          </Grid>
          <NavMenu2/>

          <Grid item sm>
            
          </Grid>
        </Grid>
      </AppBar>
    </React.Fragment>
  );
}
