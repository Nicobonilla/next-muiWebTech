import React from 'react';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import AppBarB from '../components/AppBarB.jsx';
import BottonNav from '../components/BottonNav.jsx';
import DrawerLarg from '../components/DrawerLarg2.jsx';
import CardServicios from '../components/CardServicios.jsx';
import ContainerDesk from '../components/ContainerDesk';
import ContainerMobil from '../components/ContainerMobil';
export default function Servicios() {
  return (
    <>
      <AppBarB />

      <Grid>
        <Grid xs={2}>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}></Box>
        </Grid>
        <Grid xs={10}>
          <ContainerMobil>
            <BottonNav />
          </ContainerMobil>


          <ContainerDesk>
            <Grid xs={2}>
              <DrawerLarg />
            </Grid>
            <Grid xs={10}>
              <BottonNav />
            </Grid>
          </ContainerDesk>
        </Grid>
      </Grid>
    </>
  );
}
