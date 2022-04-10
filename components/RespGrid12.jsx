import { Grid } from '@mui/material';
import React from 'react';

const RespGrid12 = ({ children }) => {
  return (
    <>
      <Grid
        container
        sx={{ background: '#F9F6F6', justifyContent: 'center', py: 1.5 }}
      >
        <Grid item xs={12} xl={10}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default RespGrid12;
