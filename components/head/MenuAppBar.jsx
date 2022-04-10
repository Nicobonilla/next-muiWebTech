import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';


function MenuAppBar({ bgColor, children }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const color = bgColor ? bgColor : '#FFFFFF';
  return (
    <>
      <Box
        sx={{
          color: 'gray', // color IconButton
          flexGrow: 1,
          background: color,
          justifyContent:'center',
          display: { xs: 'flex', md: 'none' },
        }}
      >
        <IconButton
          size="large"
          aria-label="solicitar cotizacion"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {children}
        </Menu>
      </Box>
    </>
  );
}

export default MenuAppBar;
