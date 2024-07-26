import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Box, TextField, InputAdornment } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import image from './Images/image.jpg';
import React from 'react';

const buttonStyle = {
    color: '#FFFFFF',
    backgroundColor: '#10B981', 
    borderColor: '#10B981', 
  };

export default function MainsectionOne(){
    return(
        <div>
           
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={5}>
                        <Box mt={12}>
                        <Typography variant = "h3" gutterBottom sx={{color:'#1B1C57',fontFamily:'Lexend'}}>
                        Experience the future<br></br>
                         Of<span style={{color:'#4ADD7C'}}> Home Building </span><br></br>
                         with modular design.
                        </Typography>
                       <Box mb={20} mt={10} ml={4} mr={2}>
                        <Typography variant = "h5" gutterBottom sx={{color:'#626687', fontFamily:'Lexend'}}>
                        Everything you need about finding your place to live will be here, where it will be easier for you
                        </Typography>
                       </Box><br></br>
                       <br></br>
                       <Box>
                       <TextField
                       InputProps={{
                        startAdornment: (
                        <InputAdornment position="start"  sx={{color:'#F59E0B'}}>
                        <LocationOnIcon />
                        </InputAdornment>
                        ),
                       endAdornment: (
                        <InputAdornment position="end">
                       <Button variant='contained' style={buttonStyle}>Search
                       <ArrowForwardIcon/></Button>
                       </InputAdornment>
                       ),
                       sx: { ml: 1 } 
                       }}
                       placeholder="Search for the location you want!"
                       />
                       </Box>
                       </Box>
                       </Grid>

                       <Grid item xs={12} sm={12} md={6} lg={7}>
                <img src={image} alt="" />
                </Grid>


                    </Grid>
                    
         
        </div>
    )
}