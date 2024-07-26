import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function Figma(){
    return(
        <div className="Figma">
       
        <Grid container={2}>
        <Grid item xs={12}>
        <Box sx={{backgroundColor:'#F1B66C',Width:'1440px', Height:'660px'}}>
        <Grid item xs={6}  md={6}>
        <Box>
       <Typography  variant="h3" sx={{color:'#FFFFFF', fontFamily:'Oxygen'}}>
        Have a Look at Our Unique Selling Proportions
        </Typography>
        <Button variant="contained" sx={{color:'white',fontFamily:'Exo', backgroundColor:'#282828'}}>See Our Products
        <ArrowForwardIcon />
        </Button>
       
        </Box>
        </Grid>

       
        <Grid item xs={6} md={6}>
        <Grid container={2}>
        <Box>
        <Typography variant="h5" sx={{color:'#FFFFFF', fontFamily:'Oxygen'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </Typography>
        </Box>
        </Grid>

        <Grid item xs={6} md={6}>
        <Box>
        <Typography variant='h2'sx={{color:'#FFFFFF', fontFamily:'Oxygen'}}>
        99%
        </Typography>
        <Typography variant='h5'sx={{color:'#FFFFFF', fontFamily:'Oxygen'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </Typography>
        </Box>
        </Grid>
        <Grid item xs={6} md={6}>
        <Box>
        <Typography variant='h2'sx={{color:'#FFFFFF', fontFamily:'Oxygen'}}>
        100%
        </Typography>
        <Typography variant='h5'sx={{color:'#FFFFFF', fontFamily:'Oxygen'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </Typography>
        </Box>
        </Grid>
        </Grid>
        
       
        </Box>
        </Grid>
        </Grid>
    
        </div>
    )
}