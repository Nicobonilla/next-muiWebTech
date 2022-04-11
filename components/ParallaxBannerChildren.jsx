import React from 'react';
import { Button, Grid } from '@mui/material';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';

function ParallaxBannerChildren({titulo, bodi, boton}) {
  return (
    <Grid container sx={{ ml: 20 }}>
      <Grid xs={12} sxitem>
        <h6> {titulo}</h6>
        <body>{bodi}</body>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          sx={{ color: 'white', fontSize: '30px' }}
          startIcon={<MarkUnreadChatAltIcon />}
        >
          {boton}
        </Button>
      </Grid>
    </Grid>
  );
}

export default ParallaxBannerChildren;
