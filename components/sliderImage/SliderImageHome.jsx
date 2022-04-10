import { Divider, Grid, Paper, Box, IconButton, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { xmx } from '../../utils/resp';
import Carousel from '../CarouselMui';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
/*const bps = [ 'sx', 'sm', 'lg']
  const parallaxAspectRatio = ['1', '2', '3']
  let asRati = bps.map( ({bp, index}) => ({[bp]:parallaxAspectRatio[index]}))*/
const SliderImageHome = ({}) => {
  const asRatio = { sx: '1', sm: '2', lg: '3' };
  const imagenes = [
    '/imagenes/computer.jpg',
    '/imagenes/tablet.jpg',
    '/imagenes/branding.jpg',
    '/imagenes/ws3.jpg',
  ];

  return (
    <>
      {Object.entries(xmx).map(([r, value]) => (
        <Grid key={r} sx={{ ...value.sx }}>
          {r == 'xs' ? (
            <Carousel>
              {imagenes.map((imagen, index) => (
                <Box
                  item
                  key={index}
                  container
                  sx={{
                    ...value.sx,
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
                  <Image
                    alt="mobil first full responsive digital ecommerce brand Chile, Viña del Mar."
                    src={imagen}
                    layout="responsive"
                    height={1}
                    width={1}
                  />
                </Box>
              ))}
            </Carousel>
          ) : (
            <Carousel>
              {imagenes.map((imagen, index) => (
                <Box
                  key={index}
                  item
                  container
                  sx={{
                    ...value.sx,
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
                  <ParallaxBanner
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
                          <Grid container sx={{ml:20}}>
                            <Grid xs={12} sxitem>
                              <h6> Confía en la experiencia</h6>
                              <body>Gestión integral de proyectos digitales</body>
                            </Grid>
                            <Grid item>
                              <Button 
                                variant="outlined"
                                sx={{ color: 'white',fontSize:'30px' }}
                                startIcon={<MarkUnreadChatAltIcon />}
                              >
                                Cotiza
                              </Button>
                            </Grid>
                          </Grid>
                        ),
                        speed: -5,
                      },
                    ]}
                  />
                </Box>
              ))}
            </Carousel>
          )}{' '}
        </Grid>
      ))}

      <Grid item xs={12} height={1800} sx={{ background: 'gray' }}></Grid>
    </>
  );
};

export default SliderImageHome;
