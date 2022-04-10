import React from 'react';
import Carousel from 'react-material-ui-carousel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function CarouselMui({ children }) {
  return (
    <Carousel
    interval={10000}
      //INDICATORS
      //IndicatorIcon={<HomeIcon />}
      //https://www.npmjs.com/package/react-material-ui-carousel
      indicatorContainerProps={{
        style: {
          marginTop: '-50px', // 5
          paddingBottom: '15px',
        },
      }}
      indicatorIconButtonProps={{
        style: {
          padding: '10px', // 1
          color: 'white', // 3
          zIndex: '10',
        },
      }}
      //NAVIGATION
      fullHeightHover={true} // We want the nav buttons wrapper to only be as big as the button element is
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: 'transparent',
          opacity: '1',
          borderRadius: 0,
        },
      }}
      enableMouseSwipe={true}
      NextIcon={<ArrowForwardIosIcon />}
      PrevIcon={<ArrowBackIosIcon />}
      navButtonsAlwaysVisible={true}
      buttonVisible={{ opacity: '1' }}
      activeIndicatorIconButtonProps={{
        className: 'indicator',
        style: {
          color: 'transparent',
        },
      }}
      navButtonsWrapperProps={{
        style: {
          bottom: '0',
          top: 'unset',
        }, // Move the buttons to the bottom. Unsetting top here to override default style.
      }}
    >
      {children}
    </Carousel>
  );
}

export default CarouselMui;
