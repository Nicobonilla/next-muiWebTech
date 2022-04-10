import { Parallax } from 'react-parallax';
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  FormControl,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';

import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import InsertCommentIcon from '@mui/icons-material/InsertComment';

let colorIconos = '#dddddd';

const formulario = [
  { label: 'Nombre completo', icon: <PersonOutlineRoundedIcon />, col: 1 },
  { label: 'Empresa', icon: <AccountBalanceIcon />, col: 1 },
  { label: 'Email', icon: <MailOutlineIcon />, col: 1 },
  { label: 'Teléfono', icon: <PhoneIcon />, col: 2 },
  { label: 'Celular', icon: <PhoneAndroidIcon />, col: 2 },
  { label: 'Comentarios', icon: <InsertCommentIcon />, col: 1, comentario: 1 },
];

const ContactanosForm = () => {
  return (
    <Grid container spacing={1} >
      <Grid item xs={12} sm={6} md={6} lg={ 6} xl={6} sx={{mt:10 }}>
      <Card >
      <CardContent>
        <Typography variant="h5" sx={{ my: 2, ml: 3 }}>
          Formulario de Contacto
        </Typography>
        <Grid container spacing={1} sx={{ color: colorIconos }}>
          {formulario.map((registro) => (
            <Grid 
            item
              xs={registro.col == 2 ? 6 : 12}
              sm={registro.col == 2 ? 6 : 12}
              md={registro.col == 2 ? 6 : 12}
              lg={registro.col == 2 ? 6 : 12}
              xl={registro.col == 2 ? 6 : 12}
              key={registro.label}
              sx={{ display: 'inline-flex', alignItems: 'center' }}
            >
              {registro.icon}
                <TextField
                  sx={{ ml: 1 }}
                  sm={6}
                  multiline={registro.comentario && true}
                  label={registro.label}
                  variant="standard"
                  fullWidth
                />
            </Grid>
          ))}
        </Grid>
      </CardContent>  
    </Card>

    </Grid>
    </Grid>
     
    
    
  );
};

export default ContactanosForm;
