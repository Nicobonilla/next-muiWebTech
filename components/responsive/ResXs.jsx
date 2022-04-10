import { Grid } from '@mui/material';
import React from 'react';

function ResXs({ bgColor, children, cols, py, pt}) {
  return (
    <>
      <Grid
        item
        xs={cols}
        sx={{
          background: { bgColor }, //'#F9F6F6',
          py, pt,
          display: { xs: 'block', md: 'none' },
        }}
      >
        {children}
      </Grid>
    </>
  );
}

export default ResXs;
