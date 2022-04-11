import { Divider, Grid, Paper, Box, IconButton, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { xmx } from '../../utils/resp';
import Carousel from '../CarouselMui';
import ParallaxBannerChildren from '../ParallaxBannerChildren';
/*const bps = [ 'sx', 'sm', 'lg']
  const parallaxAspectRatio = ['1', '2', '3']
  let asRati = bps.map( ({bp, index}) => ({[bp]:parallaxAspectRatio[index]}))*/
const SliderImageHome = ({}) => {
  const asRatio = { sx: '1', sm: '2', lg: '2.5' };
  const imagenes = [
    '/imagenes/computer.jpg',
    '/imagenes/tablet.jpg',
    '/imagenes/branding.jpg',
    '/imagenes/ws3.jpg',
  ];

  return (
    <>
    {
      Object.entries(xmx).map(([r, value]) => (
      <Grid container key={r} sx={{ ...value.sx }}>
        <Carousel>
          {imagenes.map((imagen, index) => (
            <Box
              item
              key={r}
              container
              sx={{
                display: 'responsive',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                backgroundColor: '#683bb7',
                color: '#fff',
                fontSize: '4em',
              }}
            >
              {r == 'xs' ? (
                <Image
                  key={index}
                  alt="mobil first full responsive digital ecommerce brand Chile, Viña del Mar."
                  src={imagen}
                  layout="responsive"
                  height={1}
                  width={1}
                />
              ) : (
                <ParallaxBanner
                  key={index}
                  style={{ aspectRatio: asRatio[r] }}
                  layers={[
                    {
                      image: imagen,
                      speed: 40,
                      scale: [1, 1.2],
                      opacity: [0.9, 1],
                    },
                    {
                      children: (
                        <ParallaxBannerChildren
                          titulo={'Confía en la experiencia'}
                          bodi={'Gestión integral de proyectos digitales'}
                          boton={'COTIZAR'}
                        />
                      ),
                      speed: -5,
                    },
                  ]}
                />
              )}
            </Box>
          ))}
        </Carousel>
      </Grid>
      ))

}
      <Grid item xs={12} height={500} sx={{ background: 'blue' }}></Grid>
      <Grid item xs={12} height={1800} sx={{ background: 'gray' }}></Grid>
    </>
  );
};

export default SliderImageHome;
