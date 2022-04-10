import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import ResMd from '../responsive/ResMd';
import ResXl from '../responsive/ResXl';
import ResXs from '../responsive/ResXs';

const SliderImageHome = ({ ancho, color }) => {
  const bg = color ? color : '#FFFFFF';

  const xmx = {
    xs: {
      background: { bgColor }, //'#F9F6F6',
      py,
      pt,
      display: { xs: 'block', md: 'none' },
      justifyContent,

    },
    md: {
      background: { bgColor },
      py,
      pt,
      display: { xs: 'none', md: 'flex', xl: 'none' },
    },
    xl: {
      background: { bgColor },
      py,
      pt,
      display: { xs: 'none', xl: 'flex' },
    },
  };

  /*sx={{
    background: { bgColor }, //'#F9F6F6',
    py, pt,
    display: { xs: 'block', md: 'none' },
  }}
> */ // XsMdXl

  return (
    <>
    
      <ResXs bgColor={bg}>
        <Box sx={{ justifyContent: 'center' }}>
          <Image
            alt="mobil first full responsive digital ecommerce brand Chile, Viña del Mar."
            src="/../public/imagenes/webapp-user.jpg"
            layout="fill"
            height={500}
            width={ancho}
          />
        </Box>
      </ResXs>
      <ResMd bgColor={bg}>
        <Box sx={{ justifyContent: 'center' }}>
          <Image
            alt="mobil first full responsive digital ecommerce brand Chile, Viña del Mar."
            src="/../public/imagenes/webapp-user.jpg"
            layout="responsive"
            height={350}
            width={ancho}
          />
        </Box>
      </ResMd>
      <ResXl bgColor={bg}>
        <Box sx={{ justifyContent: 'center' }}>
          <Image
            alt="mobil first full responsive digital ecommerce brand Chile, Viña del Mar."
            src="/../public/imagenes/webapp-user.jpg"
            layout="responsive"
            height={350}
            width={ancho}
          />
        </Box>
      </ResXl>
    </>
  );
};

export default SliderImageHome;
