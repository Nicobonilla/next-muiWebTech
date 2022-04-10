import { Grid } from '@mui/material';
import React from 'react';

function ResMd({bgColor, children, cols, mr, py, pt}) {
  return (
    <>
      <Grid
        item
        md={cols}
        lg={cols}
        sx={{
          background: {bgColor},
          py,pt,
          display: { xs: 'none', md: 'flex', xl: 'none' },
        }}
      >
        {children}
      </Grid>
    </>
  );
}

export default ResMd;
