import React from 'react';
import { CssBaseline, Drawer, Grid, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import DrawerLargLogo from './DrawerLargLogo.jsx';
import ContainerDesk from '../ContainerDesk'
import NavMenu from '../NavMenu.jsx';

const pages = ['HOME', 'SERVICIOS', 'NOSOTROS', 'CONTACTANOS'];

const DrawerLarg = () => {
  const theme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            background: '#000000',
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: '#6b6b6b #2b2b2b',
            '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
              backgroundColor: '#000000',
            },
            '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
              borderRadius: 8,
              // backgroundColor: '#6b6b6b', //gris a negro
              backgroundColor: '#000730',
              minHeight: 24,
              //border: '3px solid #2b2b2b', borde gris
              border: '3px solid #06104f', //borde negro
            },
            '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
              {
                backgroundColor: '#06104f',
              },
            '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
              {
                backgroundColor: '#06104f',
              },
            '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
              {
                backgroundColor: '#06104f',
              },
            '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
              backgroundColor: '#2b2b2b',
            },
          },
        },
      },
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid xs={3}>
          <Drawer
            anchor="left"
            variant="permanent"
            sx={{ display: { sx: 'none', sm: 'block' } }}
          >
            <DrawerLargLogo />
            <Box sx={{ mt: 1 }}></Box>
            <NavMenu />
          </Drawer>
        </Grid>
        <Grid xs={9}>
          <ContainerDesk> </ContainerDesk>
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default DrawerLarg;
