import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
} from '@mui/material';
import { servicios } from '../utils/servicios.js';

const valorCategorias = Object.values(servicios[0]);
const categoriasServicios = [
  'DISEÑO WEB',
  'PUBLICIDAD',
  'BRANDING',
  'DIGITAL',
  'IMPRESIÓN',
  'VIDEO',
];
const CardServicios = () => {
  return (
    <>
      <Box sx={{ display: 'inline-flex', flexWrap: 'wrap', m: 1  }}>

        {Object.values(servicios[0].BRANDING).map((ele) => (
          <Card key={ele} sx={{ maxWidth: 280, m: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="imagenes/5.jpg"
                alt={ele}
              />
              hola
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {ele}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
        
      </Box>
    </>
  );
};

export default CardServicios;
