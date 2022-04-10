import { Typography } from '@mui/material';
import React from 'react';

export const SizeWin = ({ width }) => {
  return (
    <>
      width: {width} bp:
      {width < 600
        ? 'xs'
        : width > 600 && width <= 900
        ? 'sm '
        : width >= 900 && width <= 1200
        ? 'md'
        : width >= 1200 && width <= 1536
        ? 'lg'
        : width >= 1536 && 'xl'}{' '}
    </>
  );
};
