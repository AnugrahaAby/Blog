import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
export default function Order(){
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" ml={5} sx={{color:'#2D2D2D',fontFamily:'Oxygen'}}>Order History</Typography>
                    <Typography sx={{color:'#575757',fontFamily:'Oxygen'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Typography>
                </Grid>
            </Grid>
        </div>

    );
}