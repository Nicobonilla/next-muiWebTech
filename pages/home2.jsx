import * as React from 'react';
import SliderImageHome from '../components/sliderImage/SliderImageHome.jsx';
import RespAppBar from '../components/head/RespAppBar';
import { CssBaseline } from '@mui/material';

const ResponsiveAppBar = () => {
  return (
    <>
      <CssBaseline />
      <RespAppBar />
      <SliderImageHome  />
    </>
  );
};
export default ResponsiveAppBar;
