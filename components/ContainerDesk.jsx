import React from 'react';
import { Container, Box } from '@mui/material';
import { useWindowSize } from '../hooks/useWindowSize';

const ContainerDesk = ({ children }) => {
  const { width, heigth } = useWindowSize();
  
  return (
    
    <>
        <Container
          sx={{
            display: { xs: 'none', sm: 'block', md: 'block', lg:'block' },
            justifyContent: 'flex-end',
            ml: 35,
          }}
        >
          {children}
        </Container>
    </>
  );
};

export default ContainerDesk;
