import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

function Logo() {
  return (
    <Grid>
      <Image
        src="/imagenes/logo.png"
        alt="Picture of the author"
        width={200}
        height={200}
      />
    </Grid>
  );
}

export default Logo;
