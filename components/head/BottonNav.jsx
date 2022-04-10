import React, { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
} from '@mui/material';
import PropTypes from 'prop-types';
import { servicios } from '../utils/servicios.js';
import CardServicios from './CardServicios.jsx';
import { useWindowSize } from '../hooks/useWindowSize.jsx';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const servKeys = Object.keys(servicios[0]);
const servVal = Object.values(servicios[0]);
const categoriasServicios = [
  'DISEÑO WEB',
  'PUBLICIDAD',
  'BRANDING',
  'DIGITAL',
  'IMPRESIÓN',
  'VIDEO',
];

const BottonNav = () => {

  const { width, heigth } = useWindowSize();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let indexOf =index => categoriasServicios.indexOf(index)
  //: xs, sm, md, lg, and xl.
  return (
    <>
      <Grid container spacing={2} sx={{display:'flex'}}>
        <Box  >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ justifyContent: 'space-around', mt:2}}
        >
          {servKeys.map((ky) => (
            <Tab
              label={ky}
              key={indexOf(ky)}
              {...a11yProps(indexOf(ky))}
            />
          ))}
        </Tabs>
        </Box>

        {categoriasServicios.map((catServicio) => (
          <TabPanel
            value={value}
            index={indexOf(catServicio)}
            key={indexOf(catServicio)}
          >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', m: 1, width: `${width-200}` }}>
              {Object.values(servicios[0][catServicio]).map((ele) => (
                <Card key={ele} sx={{ maxWidth: 280, m: 1 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="imagenes/5.jpg"
                      alt={ele}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {ele}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
          </TabPanel>
        ))}
      </Grid>
    </>
  );
};

export default BottonNav;
