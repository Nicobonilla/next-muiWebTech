import React from 'react';
import {
  Box,
  Button,
  MenuItem,
  Typography,
} from '@mui/material';
import MenuAppBar from './MenuAppBar';
import ResXs from '../responsive/ResXs';
import ResMd from '../responsive/ResMd';
import ResXl from '../responsive/ResXl';

const pages = [
  'NOSTROS',
  'AGENCIA',
  'DISEÑO WEB',
  'DISEÑO GRAFICO',
  'MARKETING',
  'HOSTING',
  'PORTAFOLIO',
  'ATENCIÓN CLIENTES',
];
const AppBar2 = () => {
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const color = '#F9F6F6'; //INGRESAR COLOR DEL GRID
  const bgColor = color ? color : '#FFFFFF'; // COLOR DEFAULT

  const column = 12;
  const nCol = column ? column : 12;
  return (
    <>
      <ResXs bgColor={bgColor} cols={nCol} py={1.3}>
        <MenuAppBar color={bgColor}>
          {' '}
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </MenuAppBar>
      </ResXs>

      <ResMd py={1}>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ py: 2, color: 'black', display: 'block' }}
            >
              <Typography variant="h5">{page}</Typography>
            </Button>
          ))}
        </Box>
      </ResMd>
      <ResXl py={2}>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ py: 2, color: 'black', display: 'block' }}
            >
              <Typography variant="h5">{page}</Typography>
            </Button>
          ))}
        </Box>
      </ResXl>
    </>
  );
};

export default AppBar2;
