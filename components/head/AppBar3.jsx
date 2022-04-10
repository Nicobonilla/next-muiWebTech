import React from 'react';
import { Box, Button, Grid, MenuItem, Typography } from '@mui/material';
import MenuAppBar from './MenuAppBar';
import { xmx, pages, m } from '../../utils/resp';

const AppBar3 = () => {
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const color = '#F9F6F6'; //INGRESAR COLOR DEL GRID
  const bgColor = color ? color : '#FFFFFF'; // COLOR DEFAULT

  const padY = { xs: 1.2, sm: 1, lg: 2 };
  const padX = { xs: undefined, sm: 1, lg: 4 }
  return (
    <>
      {Object.entries(xmx).map(([r, value]) => (
        <Grid container key={r}>
          <Grid item py={padY[r]} sx={{ ...value.sx , flexGrow:1}}>
            {r == 'xs' ? (
                <MenuAppBar color={bgColor}>
                  {' '}
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </MenuAppBar>
            ) : (
              <Box
                sx={{
                  flexGrow: 1,
                  flexDirection: 'row',
                  display: 'flex',
                  justifyContent: 'center',
                  ml: m[r],
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ px:padX[r], py: 2, color: 'black', display: 'block' }}
                  >
                    <Typography variant="h5">{page}</Typography>
                  </Button>
                ))}
              </Box>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default AppBar3;
