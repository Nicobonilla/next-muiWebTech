import React from 'react';
import {
  Grid,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';

function Logo() {
  return (
    <Grid>
    <Box
      padding={1}
      sx={{
        flexDirection: 'column',
        bgcolor: 'transparent',
        borderRadius: 1,
        textAlign: 'center',
        ml:-8.5
      }}
    >
        <Typography
          sx={{ fontFamily: 'BodoniFLF', fontSize: 20, color: 'white' }}
        >
          Web 
        </Typography>
        <Typography
          sx={{
            fontSize: 17,
            mt: -3.3, ml:10,  
            color: 'white',
          }}
        >
          TECH
        </Typography>
      <Typography sx={{ mt: -3, ml:6.5, color: 'white' }}>
        __________________
      </Typography>
      <Typography sx={{ fontFamily:'Quick', fontSize: 7, mt: '-5px',ml:4, color: 'white', fontStyle:'italic'}}>
        DIGITAL DREAMS
      </Typography>
    </Box>
  </Grid>
  );
}

export default Logo;
