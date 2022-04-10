import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Header from '../components/Header.jsx';
import VimeoPlayer from '../components/VimeoPlayer.jsx';
import { data } from '../utils/data.js';

export default function Videos() {
  return (
    <>
      <Header />
      <Grid>
        <Grid>
          <Typography sx={{ mx: 3, mt: 15 }} variant="h5">
            Reels Iconoanima
          </Typography>
        </Grid>

        <Grid
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'center', }}>
            {data.videoReels.map((vimeo) => (
              <VimeoPlayer key={data.videoReels.nombre} video={vimeo.src} />
            ))}
          </Box>
        </Grid>

        <Grid>
          <Typography sx={{ mx: 3, mt: 3 }} variant="h5">
            Framentos Animados
          </Typography>
        </Grid>

        <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box sx={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'center' }}>
            {data.fragmentosAnimados.map((vimeo) => (
              <VimeoPlayer
                key={data.fragmentosAnimados.nombre}
                video={vimeo.src}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
