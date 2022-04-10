import React, { useState, useEffect } from 'react';
import {
  Drawer,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavMenu from '../NavMenu.jsx';


const DrawerComp = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(open);
  }, [open]);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <Drawer anchor="left" open={open} onClose={() => handleMenuClick()}>
        <NavMenu/>
      </Drawer>
      {!open && (
        <IconButton sx={{ color: 'red' }} onClick={() => handleMenuClick()}>
          <MenuIcon fontSize="large" />
        </IconButton>
      )}
    </React.Fragment>
  );
};

export default DrawerComp;
