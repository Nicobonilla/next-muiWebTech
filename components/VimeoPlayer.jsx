import React from 'react';
import Vimeo from '@u-wave/react-vimeo';
import { useWindowSize } from '../hooks/useWindowSize';
import { Box } from '@mui/system';

const VimeoPlayer = ({ video }) => {
  const { width, height } = useWindowSize();
  let resp = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 };

  let ancho = () =>
    width < resp.sm
      ? width - 40
      : width > resp.sm && width < resp.md
      ? width / 2 - 60
      : width > resp.md && width < resp.lg
      ? width / 2.5 - 20
      : width > resp.lg && width < resp.xl
      ? width / 4 - 20
      : width > resp.xl && width / 5 - 20;

  return (
    <>
      <Box sx={{mx:3, display: 'inline-flex' }}>
        <Vimeo
          video={video}
          width={ancho()}
          height={ancho() * 0.75}
          muted={false}
          controls={true}
          showByline={true}
          showTitle={false}
        />
      </Box>
    </>
  );
};

export default VimeoPlayer;
