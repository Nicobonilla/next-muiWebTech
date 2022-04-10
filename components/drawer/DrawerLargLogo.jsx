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
            mt: 5, ml:-8.5
          }}
        >
            <Typography
              sx={{ fontFamily: 'BodoniFLF', fontSize: 30, color: 'white' }}
            >
              Web 
            </Typography>
            <Typography
              sx={{
                fontSize: 25,
                mt: -5, ml:15,  
                color: 'white',
                fontStyle:'ligth'
              }}
            >
              TECH
            </Typography>
          <Typography sx={{ mt: -3, ml:8.5, color: 'white' }}>
            __________________
          </Typography>
          <Typography sx={{ fontSize: 9, mt: '-5px', color: 'white', fontStyle:'italic'}}>
            DIGITAL DREAMS
          </Typography>
        </Box>
      </Grid>
  );
}

export default Logo;
