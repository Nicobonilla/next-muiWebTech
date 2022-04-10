import { Box, Button } from '@mui/material';
import React from 'react';

function CotizarButton({ width, height}) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          flexGrow: 1
        }}
      >
        <Button
          color="primary"
          variant="outlined"
          sx={{
            width, height
          }}
        >
          {' '}
          COTIZAR
        </Button>
      </Box>
    </>
  );
}

export default CotizarButton;
