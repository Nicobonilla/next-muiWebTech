import React from 'react';
import { Box } from '@mui/system';
import AppBarB from '../components/AppBarB.jsx';
import DrawerLarg from '../components/DrawerLarg2.jsx';
import ContactanosForm from '../components/ContactanosForm.jsx';
import ContainerDesk from '../components/ContainerDesk.jsx';
import ContainerMobil from '../components/ContainerMobil.jsx';

export default function Contacto() {
  return (
    <>
      <AppBarB />
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <DrawerLarg />
      </Box>
      <ContainerMobil>
        <ContactanosForm />
      </ContainerMobil>
      <ContainerDesk>
        <ContactanosForm />
      </ContainerDesk>
    </>
  );  
}
