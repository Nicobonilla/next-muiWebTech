import React from 'react'
import { Container } from '@mui/material'
import { useWindowSize } from '../hooks/useWindowSize';

const ContainerMobil = ({children}) => {
const { width, heigth } = useWindowSize();
  return (
    <Container
    sx={{
      width: { width }, mt:8,
      display: { xs: 'block', sm: 'none' },
    }}
  >
      {children}
  </Container>
  )
}

export default ContainerMobil