import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import React from 'react';

const NavMenu = () => {
  const pages = ['HOME', 'SERVICIOS', 'NOSOTROS', 'CONTACTANOS'];
  const pestañas = [
    'primary.light',
    'info.dark',
    'error.dark',
    'success.light',
  ];

  const slugPages = pages.map((title) => convertToSlug(title));

  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
  }

  return (
    <Box sx={{ width: 230, mt: 7, ml: 3 }}>
      <Typography>
        <List sx={{ width: '100%' }}>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon sx={{ color: '#FFFFFF', my: -1 }} component="nav">
                <Box
                  sx={{
                    width: 10,
                    height: 24,
                    mr: 1,
                    mt: 1.5,
                    backgroundColor: pestañas[index],
                    '&:hover': {
                      backgroundColor: pestañas[index],
                      opacity: [0.9, 0.8, 0.7],
                      width: 15,
                    },
                  }}
                >
                  <Link href={'/' + slugPages[index]} passHref>
                    <ListItemText
                      sx={{
                        '&:hover': {
                          backgroundColor: pestañas[index],
                          opacity: [0.9, 0.8, 0.7],
                          width: '100%',
                          ml: 0.5,
                          mt: 0.5,
                        },
                      }}
                    >
                      {page}
                    </ListItemText>
                  </Link>
                </Box>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Typography>
    </Box>
  );
};

export default NavMenu;
