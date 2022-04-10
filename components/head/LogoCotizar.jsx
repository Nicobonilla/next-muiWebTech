import { Box, Button, Grid, Typography, Item} from '@mui/material';
import React from 'react';
import CotizarButton from '../head/CotizarButton';
import WebTech from '../logo/WebTech';
import { xmx, res, m } from '../../utils/resp';
function LogoCotizar({ pt, color }) {
  const bgColor = color ? color : '#FFFFFF';
  const padTop = pt ? pt : 0;

  const wdt = { xs: 130, sm: 180, lg: 270 };
  const hgt = { xs: 35, sm: 35, lg: 45 };


  return (
    <>
      {Object.entries(xmx).map(([r, value]) => (
        <Grid container key={r}  >
          <Grid
            item
            xs={6}
            sx={{ ...value.sx, pt: padTop, background: bgColor }}
            pl={m[r]}
          >
            <WebTech />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ ...value.sx, pt: padTop, background: bgColor }}
            pr={m[r]}
            
          >
              <CotizarButton width={wdt[r]} height={hgt[r]} />
          </Grid>
        </Grid>
      ))}
    </>
  );
}

export default LogoCotizar;
