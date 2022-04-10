import React from 'react';
import { Grid, Typography } from '@mui/material';
import { SizeWin } from '../SizeWin';
import { useWindowSize } from '../../hooks/useWindowSize';

import { xmx, m } from '../../utils/resp';

const HeaderTop = ({ py }) => {
  //Typography
  let fSize = { xs: 10, sm: 12, lg: 12 };
    //Grid
  const padY = py ? py : 0;
  //SizeWin
  const { width, height } = useWindowSize();

  return (
    <>
      {Object.entries(xmx).map(([r, value]) => (
        <Grid container key={r}>
          <Grid
            item
            py={padY}
            mx={m[r]}
            sx={{ ...value.sx }}
          >
            <Typography
              fontFamily={'Quick'}
              sx={{ fontSize: fSize[r], color: 'gray' }}
            >
              {r == 'xs'
                ? ' Ventas: +569 5653 4415 / +567 5241 2563 | Soporte +56 2 2365 5415 '
                : 'Gestión Integral de Servicios Digitales e Informáticos Ventas: +569' +
                  '5653 4415 / +567 5241 2563 | Soporte +56 2 2365 5415'}

              <SizeWin width={width} />
            </Typography>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default HeaderTop;
