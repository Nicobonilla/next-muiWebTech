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
//import { useWindowSize } from '../hooks/useWindowSize';

const NavMenu2 = () => {
  const pages = ['HOME', 'SERVICIOS', 'NOSOTROS', 'CONTACTANOS'];
  const colorMenuItems = [
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

  const { width, height } = useWindowSize();

  return (
    <Typography variant="nav">
      <List sx={{ width: '100%' }}>
        {pages.map((page, index) => (
          <ListItemButton key={index}>
            <ListItemIcon sx={{ color: '#000000', my: 0 }} component="nav">
              <Link href={'/' + slugPages[index]} passHref>
                <ListItemText
                  sx={{
                    '&:hover': {
                      opacity: [0.9, 0.8, 0.7],
                      width: '100%',
                      ml: 1,
                    },
                  }}
                >
                  {page}
                </ListItemText>
              </Link>
            </ListItemIcon>
          </ListItemButton>
        ))}
      </List>
      {width}
      bp:{' '}
      {width > 600 && width <= 900
        ? 'sm '
        : width >= 900 && width <= 1200
        ? 'md'
        : width >= 1200 && width <= 1536
        ? 'lg'
        : width >= 1536 && 'xl'}
    </Typography>
  );
};

export default NavMenu2;
