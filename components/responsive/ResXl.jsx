import { Grid } from '@mui/material';
import React from 'react';

function ResXl({bgColor, children, cols, py, pt}) {

  return (
    <>
     <Grid
        item
        xl={cols}
        sx={{
          background: {bgColor},
          py, pt,
          display: { xs: 'none', xl: 'flex' },
        }}
      >
        {children}
      </Grid>
    </>
  );
}

export default ResXl;
